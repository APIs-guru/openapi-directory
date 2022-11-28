var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var DeleteObjectStorageKeyServerList = [
    "https://api.linode.com/v4",
];
var DeleteObjectStorageKeyPathParams = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageKeyPathParams, _super);
    function DeleteObjectStorageKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=keyId" }),
        __metadata("design:type", Number)
    ], DeleteObjectStorageKeyPathParams.prototype, "keyId", void 0);
    return DeleteObjectStorageKeyPathParams;
}(SpeakeasyBase));
export { DeleteObjectStorageKeyPathParams };
var DeleteObjectStorageKeySecurity = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageKeySecurity, _super);
    function DeleteObjectStorageKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteObjectStorageKeySecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteObjectStorageKeySecurity.prototype, "oauth", void 0);
    return DeleteObjectStorageKeySecurity;
}(SpeakeasyBase));
export { DeleteObjectStorageKeySecurity };
var DeleteObjectStorageKeyDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageKeyDefaultApplicationJson, _super);
    function DeleteObjectStorageKeyDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteObjectStorageKeyDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteObjectStorageKeyDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteObjectStorageKeyDefaultApplicationJson };
var DeleteObjectStorageKeyRequest = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageKeyRequest, _super);
    function DeleteObjectStorageKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteObjectStorageKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteObjectStorageKeyPathParams)
    ], DeleteObjectStorageKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteObjectStorageKeySecurity)
    ], DeleteObjectStorageKeyRequest.prototype, "security", void 0);
    return DeleteObjectStorageKeyRequest;
}(SpeakeasyBase));
export { DeleteObjectStorageKeyRequest };
var DeleteObjectStorageKeyResponse = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageKeyResponse, _super);
    function DeleteObjectStorageKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteObjectStorageKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteObjectStorageKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteObjectStorageKeyResponse.prototype, "deleteObjectStorageKey200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteObjectStorageKeyDefaultApplicationJson)
    ], DeleteObjectStorageKeyResponse.prototype, "deleteObjectStorageKeyDefaultApplicationJsonObject", void 0);
    return DeleteObjectStorageKeyResponse;
}(SpeakeasyBase));
export { DeleteObjectStorageKeyResponse };
