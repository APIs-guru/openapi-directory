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
export var DeleteObjectStorageBucketServerList = [
    "https://api.linode.com/v4",
];
var DeleteObjectStorageBucketPathParams = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageBucketPathParams, _super);
    function DeleteObjectStorageBucketPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], DeleteObjectStorageBucketPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], DeleteObjectStorageBucketPathParams.prototype, "clusterId", void 0);
    return DeleteObjectStorageBucketPathParams;
}(SpeakeasyBase));
export { DeleteObjectStorageBucketPathParams };
var DeleteObjectStorageBucketSecurity = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageBucketSecurity, _super);
    function DeleteObjectStorageBucketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteObjectStorageBucketSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteObjectStorageBucketSecurity.prototype, "oauth", void 0);
    return DeleteObjectStorageBucketSecurity;
}(SpeakeasyBase));
export { DeleteObjectStorageBucketSecurity };
var DeleteObjectStorageBucketDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageBucketDefaultApplicationJson, _super);
    function DeleteObjectStorageBucketDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteObjectStorageBucketDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteObjectStorageBucketDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteObjectStorageBucketDefaultApplicationJson };
var DeleteObjectStorageBucketRequest = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageBucketRequest, _super);
    function DeleteObjectStorageBucketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteObjectStorageBucketRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteObjectStorageBucketPathParams)
    ], DeleteObjectStorageBucketRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteObjectStorageBucketSecurity)
    ], DeleteObjectStorageBucketRequest.prototype, "security", void 0);
    return DeleteObjectStorageBucketRequest;
}(SpeakeasyBase));
export { DeleteObjectStorageBucketRequest };
var DeleteObjectStorageBucketResponse = /** @class */ (function (_super) {
    __extends(DeleteObjectStorageBucketResponse, _super);
    function DeleteObjectStorageBucketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteObjectStorageBucketResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteObjectStorageBucketResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteObjectStorageBucketResponse.prototype, "deleteObjectStorageBucket200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteObjectStorageBucketDefaultApplicationJson)
    ], DeleteObjectStorageBucketResponse.prototype, "deleteObjectStorageBucketDefaultApplicationJsonObject", void 0);
    return DeleteObjectStorageBucketResponse;
}(SpeakeasyBase));
export { DeleteObjectStorageBucketResponse };
