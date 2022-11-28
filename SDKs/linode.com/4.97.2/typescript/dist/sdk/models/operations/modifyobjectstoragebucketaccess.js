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
export var ModifyObjectStorageBucketAccessServerList = [
    "https://api.linode.com/v4",
];
var ModifyObjectStorageBucketAccessPathParams = /** @class */ (function (_super) {
    __extends(ModifyObjectStorageBucketAccessPathParams, _super);
    function ModifyObjectStorageBucketAccessPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], ModifyObjectStorageBucketAccessPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], ModifyObjectStorageBucketAccessPathParams.prototype, "clusterId", void 0);
    return ModifyObjectStorageBucketAccessPathParams;
}(SpeakeasyBase));
export { ModifyObjectStorageBucketAccessPathParams };
var ModifyObjectStorageBucketAccessSecurity = /** @class */ (function (_super) {
    __extends(ModifyObjectStorageBucketAccessSecurity, _super);
    function ModifyObjectStorageBucketAccessSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], ModifyObjectStorageBucketAccessSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], ModifyObjectStorageBucketAccessSecurity.prototype, "oauth", void 0);
    return ModifyObjectStorageBucketAccessSecurity;
}(SpeakeasyBase));
export { ModifyObjectStorageBucketAccessSecurity };
var ModifyObjectStorageBucketAccessDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(ModifyObjectStorageBucketAccessDefaultApplicationJson, _super);
    function ModifyObjectStorageBucketAccessDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], ModifyObjectStorageBucketAccessDefaultApplicationJson.prototype, "errors", void 0);
    return ModifyObjectStorageBucketAccessDefaultApplicationJson;
}(SpeakeasyBase));
export { ModifyObjectStorageBucketAccessDefaultApplicationJson };
var ModifyObjectStorageBucketAccessRequest = /** @class */ (function (_super) {
    __extends(ModifyObjectStorageBucketAccessRequest, _super);
    function ModifyObjectStorageBucketAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifyObjectStorageBucketAccessRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifyObjectStorageBucketAccessPathParams)
    ], ModifyObjectStorageBucketAccessRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ModifyObjectStorageBucketAccessRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifyObjectStorageBucketAccessSecurity)
    ], ModifyObjectStorageBucketAccessRequest.prototype, "security", void 0);
    return ModifyObjectStorageBucketAccessRequest;
}(SpeakeasyBase));
export { ModifyObjectStorageBucketAccessRequest };
var ModifyObjectStorageBucketAccessResponse = /** @class */ (function (_super) {
    __extends(ModifyObjectStorageBucketAccessResponse, _super);
    function ModifyObjectStorageBucketAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifyObjectStorageBucketAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifyObjectStorageBucketAccessResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ModifyObjectStorageBucketAccessResponse.prototype, "modifyObjectStorageBucketAccess200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifyObjectStorageBucketAccessDefaultApplicationJson)
    ], ModifyObjectStorageBucketAccessResponse.prototype, "modifyObjectStorageBucketAccessDefaultApplicationJsonObject", void 0);
    return ModifyObjectStorageBucketAccessResponse;
}(SpeakeasyBase));
export { ModifyObjectStorageBucketAccessResponse };
