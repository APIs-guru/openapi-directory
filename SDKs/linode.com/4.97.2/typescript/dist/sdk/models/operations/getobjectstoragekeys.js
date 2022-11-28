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
export var GetObjectStorageKeysServerList = [
    "https://api.linode.com/v4",
];
var GetObjectStorageKeysSecurity = /** @class */ (function (_super) {
    __extends(GetObjectStorageKeysSecurity, _super);
    function GetObjectStorageKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetObjectStorageKeysSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetObjectStorageKeysSecurity.prototype, "oauth", void 0);
    return GetObjectStorageKeysSecurity;
}(SpeakeasyBase));
export { GetObjectStorageKeysSecurity };
var GetObjectStorageKeys200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageKeys200ApplicationJson, _super);
    function GetObjectStorageKeys200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ObjectStorageKey }),
        __metadata("design:type", Array)
    ], GetObjectStorageKeys200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetObjectStorageKeys200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetObjectStorageKeys200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetObjectStorageKeys200ApplicationJson.prototype, "results", void 0);
    return GetObjectStorageKeys200ApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageKeys200ApplicationJson };
var GetObjectStorageKeysDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageKeysDefaultApplicationJson, _super);
    function GetObjectStorageKeysDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetObjectStorageKeysDefaultApplicationJson.prototype, "errors", void 0);
    return GetObjectStorageKeysDefaultApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageKeysDefaultApplicationJson };
var GetObjectStorageKeysRequest = /** @class */ (function (_super) {
    __extends(GetObjectStorageKeysRequest, _super);
    function GetObjectStorageKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageKeysRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageKeysSecurity)
    ], GetObjectStorageKeysRequest.prototype, "security", void 0);
    return GetObjectStorageKeysRequest;
}(SpeakeasyBase));
export { GetObjectStorageKeysRequest };
var GetObjectStorageKeysResponse = /** @class */ (function (_super) {
    __extends(GetObjectStorageKeysResponse, _super);
    function GetObjectStorageKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObjectStorageKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageKeys200ApplicationJson)
    ], GetObjectStorageKeysResponse.prototype, "getObjectStorageKeys200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageKeysDefaultApplicationJson)
    ], GetObjectStorageKeysResponse.prototype, "getObjectStorageKeysDefaultApplicationJsonObject", void 0);
    return GetObjectStorageKeysResponse;
}(SpeakeasyBase));
export { GetObjectStorageKeysResponse };
