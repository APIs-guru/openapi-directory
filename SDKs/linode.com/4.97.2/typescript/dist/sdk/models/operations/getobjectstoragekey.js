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
export var GetObjectStorageKeyServerList = [
    "https://api.linode.com/v4",
];
var GetObjectStorageKeyPathParams = /** @class */ (function (_super) {
    __extends(GetObjectStorageKeyPathParams, _super);
    function GetObjectStorageKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=keyId" }),
        __metadata("design:type", Number)
    ], GetObjectStorageKeyPathParams.prototype, "keyId", void 0);
    return GetObjectStorageKeyPathParams;
}(SpeakeasyBase));
export { GetObjectStorageKeyPathParams };
var GetObjectStorageKeySecurity = /** @class */ (function (_super) {
    __extends(GetObjectStorageKeySecurity, _super);
    function GetObjectStorageKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetObjectStorageKeySecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetObjectStorageKeySecurity.prototype, "oauth", void 0);
    return GetObjectStorageKeySecurity;
}(SpeakeasyBase));
export { GetObjectStorageKeySecurity };
var GetObjectStorageKeyDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageKeyDefaultApplicationJson, _super);
    function GetObjectStorageKeyDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetObjectStorageKeyDefaultApplicationJson.prototype, "errors", void 0);
    return GetObjectStorageKeyDefaultApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageKeyDefaultApplicationJson };
var GetObjectStorageKeyRequest = /** @class */ (function (_super) {
    __extends(GetObjectStorageKeyRequest, _super);
    function GetObjectStorageKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageKeyPathParams)
    ], GetObjectStorageKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageKeySecurity)
    ], GetObjectStorageKeyRequest.prototype, "security", void 0);
    return GetObjectStorageKeyRequest;
}(SpeakeasyBase));
export { GetObjectStorageKeyRequest };
var GetObjectStorageKeyResponse = /** @class */ (function (_super) {
    __extends(GetObjectStorageKeyResponse, _super);
    function GetObjectStorageKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectStorageKey)
    ], GetObjectStorageKeyResponse.prototype, "objectStorageKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObjectStorageKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageKeyDefaultApplicationJson)
    ], GetObjectStorageKeyResponse.prototype, "getObjectStorageKeyDefaultApplicationJsonObject", void 0);
    return GetObjectStorageKeyResponse;
}(SpeakeasyBase));
export { GetObjectStorageKeyResponse };
