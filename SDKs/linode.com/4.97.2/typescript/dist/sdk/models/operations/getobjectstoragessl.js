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
export var GetObjectStorageSslServerList = [
    "https://api.linode.com/v4",
];
var GetObjectStorageSslPathParams = /** @class */ (function (_super) {
    __extends(GetObjectStorageSslPathParams, _super);
    function GetObjectStorageSslPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], GetObjectStorageSslPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], GetObjectStorageSslPathParams.prototype, "clusterId", void 0);
    return GetObjectStorageSslPathParams;
}(SpeakeasyBase));
export { GetObjectStorageSslPathParams };
var GetObjectStorageSslSecurity = /** @class */ (function (_super) {
    __extends(GetObjectStorageSslSecurity, _super);
    function GetObjectStorageSslSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetObjectStorageSslSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetObjectStorageSslSecurity.prototype, "oauth", void 0);
    return GetObjectStorageSslSecurity;
}(SpeakeasyBase));
export { GetObjectStorageSslSecurity };
var GetObjectStorageSslDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageSslDefaultApplicationJson, _super);
    function GetObjectStorageSslDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetObjectStorageSslDefaultApplicationJson.prototype, "errors", void 0);
    return GetObjectStorageSslDefaultApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageSslDefaultApplicationJson };
var GetObjectStorageSslRequest = /** @class */ (function (_super) {
    __extends(GetObjectStorageSslRequest, _super);
    function GetObjectStorageSslRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageSslRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageSslPathParams)
    ], GetObjectStorageSslRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageSslSecurity)
    ], GetObjectStorageSslRequest.prototype, "security", void 0);
    return GetObjectStorageSslRequest;
}(SpeakeasyBase));
export { GetObjectStorageSslRequest };
var GetObjectStorageSslResponse = /** @class */ (function (_super) {
    __extends(GetObjectStorageSslResponse, _super);
    function GetObjectStorageSslResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageSslResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectStorageSslResponse)
    ], GetObjectStorageSslResponse.prototype, "objectStorageSslResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObjectStorageSslResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageSslDefaultApplicationJson)
    ], GetObjectStorageSslResponse.prototype, "getObjectStorageSslDefaultApplicationJsonObject", void 0);
    return GetObjectStorageSslResponse;
}(SpeakeasyBase));
export { GetObjectStorageSslResponse };
