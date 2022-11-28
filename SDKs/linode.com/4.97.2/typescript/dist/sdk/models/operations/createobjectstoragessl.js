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
export var CreateObjectStorageSslServerList = [
    "https://api.linode.com/v4",
];
var CreateObjectStorageSslPathParams = /** @class */ (function (_super) {
    __extends(CreateObjectStorageSslPathParams, _super);
    function CreateObjectStorageSslPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], CreateObjectStorageSslPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], CreateObjectStorageSslPathParams.prototype, "clusterId", void 0);
    return CreateObjectStorageSslPathParams;
}(SpeakeasyBase));
export { CreateObjectStorageSslPathParams };
var CreateObjectStorageSslSecurity = /** @class */ (function (_super) {
    __extends(CreateObjectStorageSslSecurity, _super);
    function CreateObjectStorageSslSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateObjectStorageSslSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateObjectStorageSslSecurity.prototype, "oauth", void 0);
    return CreateObjectStorageSslSecurity;
}(SpeakeasyBase));
export { CreateObjectStorageSslSecurity };
var CreateObjectStorageSslDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateObjectStorageSslDefaultApplicationJson, _super);
    function CreateObjectStorageSslDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateObjectStorageSslDefaultApplicationJson.prototype, "errors", void 0);
    return CreateObjectStorageSslDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateObjectStorageSslDefaultApplicationJson };
var CreateObjectStorageSslRequest = /** @class */ (function (_super) {
    __extends(CreateObjectStorageSslRequest, _super);
    function CreateObjectStorageSslRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateObjectStorageSslRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateObjectStorageSslPathParams)
    ], CreateObjectStorageSslRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectStorageSsl)
    ], CreateObjectStorageSslRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateObjectStorageSslSecurity)
    ], CreateObjectStorageSslRequest.prototype, "security", void 0);
    return CreateObjectStorageSslRequest;
}(SpeakeasyBase));
export { CreateObjectStorageSslRequest };
var CreateObjectStorageSslResponse = /** @class */ (function (_super) {
    __extends(CreateObjectStorageSslResponse, _super);
    function CreateObjectStorageSslResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateObjectStorageSslResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectStorageSslResponse)
    ], CreateObjectStorageSslResponse.prototype, "objectStorageSslResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateObjectStorageSslResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateObjectStorageSslDefaultApplicationJson)
    ], CreateObjectStorageSslResponse.prototype, "createObjectStorageSslDefaultApplicationJsonObject", void 0);
    return CreateObjectStorageSslResponse;
}(SpeakeasyBase));
export { CreateObjectStorageSslResponse };
