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
export var DeleteObjectStorageSslServerList = [
    "https://api.linode.com/v4",
];
var DeleteObjectStorageSslPathParams = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageSslPathParams, _super);
    function DeleteObjectStorageSslPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], DeleteObjectStorageSslPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], DeleteObjectStorageSslPathParams.prototype, "clusterId", void 0);
    return DeleteObjectStorageSslPathParams;
}(SpeakeasyBase));
export { DeleteObjectStorageSslPathParams };
var DeleteObjectStorageSslSecurity = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageSslSecurity, _super);
    function DeleteObjectStorageSslSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteObjectStorageSslSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteObjectStorageSslSecurity.prototype, "oauth", void 0);
    return DeleteObjectStorageSslSecurity;
}(SpeakeasyBase));
export { DeleteObjectStorageSslSecurity };
var DeleteObjectStorageSslDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageSslDefaultApplicationJson, _super);
    function DeleteObjectStorageSslDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteObjectStorageSslDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteObjectStorageSslDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteObjectStorageSslDefaultApplicationJson };
var DeleteObjectStorageSslRequest = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageSslRequest, _super);
    function DeleteObjectStorageSslRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteObjectStorageSslRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteObjectStorageSslPathParams)
    ], DeleteObjectStorageSslRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteObjectStorageSslSecurity)
    ], DeleteObjectStorageSslRequest.prototype, "security", void 0);
    return DeleteObjectStorageSslRequest;
}(SpeakeasyBase));
export { DeleteObjectStorageSslRequest };
var DeleteObjectStorageSslResponse = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageSslResponse, _super);
    function DeleteObjectStorageSslResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteObjectStorageSslResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteObjectStorageSslResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteObjectStorageSslResponse.prototype, "deleteObjectStorageSsl200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteObjectStorageSslDefaultApplicationJson)
    ], DeleteObjectStorageSslResponse.prototype, "deleteObjectStorageSslDefaultApplicationJsonObject", void 0);
    return DeleteObjectStorageSslResponse;
}(SpeakeasyBase));
export { DeleteObjectStorageSslResponse };
