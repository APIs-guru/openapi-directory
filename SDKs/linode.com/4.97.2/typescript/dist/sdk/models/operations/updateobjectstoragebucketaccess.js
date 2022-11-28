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
export var UpdateObjectStorageBucketAccessServerList = [
    "https://api.linode.com/v4",
];
var UpdateObjectStorageBucketAccessPathParams = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageBucketAccessPathParams, _super);
    function UpdateObjectStorageBucketAccessPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], UpdateObjectStorageBucketAccessPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], UpdateObjectStorageBucketAccessPathParams.prototype, "clusterId", void 0);
    return UpdateObjectStorageBucketAccessPathParams;
}(SpeakeasyBase));
export { UpdateObjectStorageBucketAccessPathParams };
var UpdateObjectStorageBucketAccessSecurity = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageBucketAccessSecurity, _super);
    function UpdateObjectStorageBucketAccessSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateObjectStorageBucketAccessSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateObjectStorageBucketAccessSecurity.prototype, "oauth", void 0);
    return UpdateObjectStorageBucketAccessSecurity;
}(SpeakeasyBase));
export { UpdateObjectStorageBucketAccessSecurity };
var UpdateObjectStorageBucketAccessDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageBucketAccessDefaultApplicationJson, _super);
    function UpdateObjectStorageBucketAccessDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateObjectStorageBucketAccessDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateObjectStorageBucketAccessDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateObjectStorageBucketAccessDefaultApplicationJson };
var UpdateObjectStorageBucketAccessRequest = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageBucketAccessRequest, _super);
    function UpdateObjectStorageBucketAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateObjectStorageBucketAccessRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateObjectStorageBucketAccessPathParams)
    ], UpdateObjectStorageBucketAccessRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdateObjectStorageBucketAccessRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateObjectStorageBucketAccessSecurity)
    ], UpdateObjectStorageBucketAccessRequest.prototype, "security", void 0);
    return UpdateObjectStorageBucketAccessRequest;
}(SpeakeasyBase));
export { UpdateObjectStorageBucketAccessRequest };
var UpdateObjectStorageBucketAccessResponse = /** @class */ (function (_super) {
    __extends(UpdateObjectStorageBucketAccessResponse, _super);
    function UpdateObjectStorageBucketAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateObjectStorageBucketAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateObjectStorageBucketAccessResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateObjectStorageBucketAccessResponse.prototype, "updateObjectStorageBucketAccess200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateObjectStorageBucketAccessDefaultApplicationJson)
    ], UpdateObjectStorageBucketAccessResponse.prototype, "updateObjectStorageBucketAccessDefaultApplicationJsonObject", void 0);
    return UpdateObjectStorageBucketAccessResponse;
}(SpeakeasyBase));
export { UpdateObjectStorageBucketAccessResponse };
