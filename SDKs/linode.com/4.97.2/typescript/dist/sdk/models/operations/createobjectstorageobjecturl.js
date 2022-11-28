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
export var CreateObjectStorageObjectUrlServerList = [
    "https://api.linode.com/v4",
];
var CreateObjectStorageObjectUrlPathParams = /** @class */ (function (_super) {
    __extends(CreateObjectStorageObjectUrlPathParams, _super);
    function CreateObjectStorageObjectUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], CreateObjectStorageObjectUrlPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], CreateObjectStorageObjectUrlPathParams.prototype, "clusterId", void 0);
    return CreateObjectStorageObjectUrlPathParams;
}(SpeakeasyBase));
export { CreateObjectStorageObjectUrlPathParams };
var CreateObjectStorageObjectUrlSecurity = /** @class */ (function (_super) {
    __extends(CreateObjectStorageObjectUrlSecurity, _super);
    function CreateObjectStorageObjectUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateObjectStorageObjectUrlSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateObjectStorageObjectUrlSecurity.prototype, "oauth", void 0);
    return CreateObjectStorageObjectUrlSecurity;
}(SpeakeasyBase));
export { CreateObjectStorageObjectUrlSecurity };
var CreateObjectStorageObjectUrlDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateObjectStorageObjectUrlDefaultApplicationJson, _super);
    function CreateObjectStorageObjectUrlDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateObjectStorageObjectUrlDefaultApplicationJson.prototype, "errors", void 0);
    return CreateObjectStorageObjectUrlDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateObjectStorageObjectUrlDefaultApplicationJson };
var CreateObjectStorageObjectUrlRequest = /** @class */ (function (_super) {
    __extends(CreateObjectStorageObjectUrlRequest, _super);
    function CreateObjectStorageObjectUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateObjectStorageObjectUrlRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateObjectStorageObjectUrlPathParams)
    ], CreateObjectStorageObjectUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], CreateObjectStorageObjectUrlRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateObjectStorageObjectUrlSecurity)
    ], CreateObjectStorageObjectUrlRequest.prototype, "security", void 0);
    return CreateObjectStorageObjectUrlRequest;
}(SpeakeasyBase));
export { CreateObjectStorageObjectUrlRequest };
var CreateObjectStorageObjectUrlResponse = /** @class */ (function (_super) {
    __extends(CreateObjectStorageObjectUrlResponse, _super);
    function CreateObjectStorageObjectUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateObjectStorageObjectUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateObjectStorageObjectUrlResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateObjectStorageObjectUrlResponse.prototype, "createObjectStorageObjectUrl200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateObjectStorageObjectUrlDefaultApplicationJson)
    ], CreateObjectStorageObjectUrlResponse.prototype, "createObjectStorageObjectUrlDefaultApplicationJsonObject", void 0);
    return CreateObjectStorageObjectUrlResponse;
}(SpeakeasyBase));
export { CreateObjectStorageObjectUrlResponse };
