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
export var UpdateObjectStorageKeyServerList = [
    "https://api.linode.com/v4",
];
var UpdateObjectStorageKeyPathParams = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageKeyPathParams, _super);
    function UpdateObjectStorageKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=keyId" }),
        __metadata("design:type", Number)
    ], UpdateObjectStorageKeyPathParams.prototype, "keyId", void 0);
    return UpdateObjectStorageKeyPathParams;
}(SpeakeasyBase));
export { UpdateObjectStorageKeyPathParams };
var UpdateObjectStorageKeyRequestBody = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageKeyRequestBody, _super);
    function UpdateObjectStorageKeyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], UpdateObjectStorageKeyRequestBody.prototype, "label", void 0);
    return UpdateObjectStorageKeyRequestBody;
}(SpeakeasyBase));
export { UpdateObjectStorageKeyRequestBody };
var UpdateObjectStorageKeySecurity = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageKeySecurity, _super);
    function UpdateObjectStorageKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateObjectStorageKeySecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateObjectStorageKeySecurity.prototype, "oauth", void 0);
    return UpdateObjectStorageKeySecurity;
}(SpeakeasyBase));
export { UpdateObjectStorageKeySecurity };
var UpdateObjectStorageKeyDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageKeyDefaultApplicationJson, _super);
    function UpdateObjectStorageKeyDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateObjectStorageKeyDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateObjectStorageKeyDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateObjectStorageKeyDefaultApplicationJson };
var UpdateObjectStorageKeyRequest = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageKeyRequest, _super);
    function UpdateObjectStorageKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateObjectStorageKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateObjectStorageKeyPathParams)
    ], UpdateObjectStorageKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateObjectStorageKeyRequestBody)
    ], UpdateObjectStorageKeyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateObjectStorageKeySecurity)
    ], UpdateObjectStorageKeyRequest.prototype, "security", void 0);
    return UpdateObjectStorageKeyRequest;
}(SpeakeasyBase));
export { UpdateObjectStorageKeyRequest };
var UpdateObjectStorageKeyResponse = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageKeyResponse, _super);
    function UpdateObjectStorageKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateObjectStorageKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectStorageKey)
    ], UpdateObjectStorageKeyResponse.prototype, "objectStorageKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateObjectStorageKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateObjectStorageKeyDefaultApplicationJson)
    ], UpdateObjectStorageKeyResponse.prototype, "updateObjectStorageKeyDefaultApplicationJsonObject", void 0);
    return UpdateObjectStorageKeyResponse;
}(SpeakeasyBase));
export { UpdateObjectStorageKeyResponse };
