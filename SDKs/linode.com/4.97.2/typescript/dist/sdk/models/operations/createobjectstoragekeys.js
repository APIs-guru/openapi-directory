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
export var CreateObjectStorageKeysServerList = [
    "https://api.linode.com/v4",
];
var CreateObjectStorageKeysSecurity = /** @class */ (function (_super) {
    __extends(CreateObjectStorageKeysSecurity, _super);
    function CreateObjectStorageKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateObjectStorageKeysSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateObjectStorageKeysSecurity.prototype, "oauth", void 0);
    return CreateObjectStorageKeysSecurity;
}(SpeakeasyBase));
export { CreateObjectStorageKeysSecurity };
var CreateObjectStorageKeysDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateObjectStorageKeysDefaultApplicationJson, _super);
    function CreateObjectStorageKeysDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateObjectStorageKeysDefaultApplicationJson.prototype, "errors", void 0);
    return CreateObjectStorageKeysDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateObjectStorageKeysDefaultApplicationJson };
var CreateObjectStorageKeysRequest = /** @class */ (function (_super) {
    __extends(CreateObjectStorageKeysRequest, _super);
    function CreateObjectStorageKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateObjectStorageKeysRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectStorageKeyInput)
    ], CreateObjectStorageKeysRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateObjectStorageKeysSecurity)
    ], CreateObjectStorageKeysRequest.prototype, "security", void 0);
    return CreateObjectStorageKeysRequest;
}(SpeakeasyBase));
export { CreateObjectStorageKeysRequest };
var CreateObjectStorageKeysResponse = /** @class */ (function (_super) {
    __extends(CreateObjectStorageKeysResponse, _super);
    function CreateObjectStorageKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateObjectStorageKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectStorageKey)
    ], CreateObjectStorageKeysResponse.prototype, "objectStorageKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateObjectStorageKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateObjectStorageKeysDefaultApplicationJson)
    ], CreateObjectStorageKeysResponse.prototype, "createObjectStorageKeysDefaultApplicationJsonObject", void 0);
    return CreateObjectStorageKeysResponse;
}(SpeakeasyBase));
export { CreateObjectStorageKeysResponse };
