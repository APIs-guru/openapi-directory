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
export var GetObjectStorageBucketServerList = [
    "https://api.linode.com/v4",
];
var GetObjectStorageBucketPathParams = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketPathParams, _super);
    function GetObjectStorageBucketPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], GetObjectStorageBucketPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], GetObjectStorageBucketPathParams.prototype, "clusterId", void 0);
    return GetObjectStorageBucketPathParams;
}(SpeakeasyBase));
export { GetObjectStorageBucketPathParams };
var GetObjectStorageBucketSecurity = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketSecurity, _super);
    function GetObjectStorageBucketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetObjectStorageBucketSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetObjectStorageBucketSecurity.prototype, "oauth", void 0);
    return GetObjectStorageBucketSecurity;
}(SpeakeasyBase));
export { GetObjectStorageBucketSecurity };
var GetObjectStorageBucketDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketDefaultApplicationJson, _super);
    function GetObjectStorageBucketDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetObjectStorageBucketDefaultApplicationJson.prototype, "errors", void 0);
    return GetObjectStorageBucketDefaultApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageBucketDefaultApplicationJson };
var GetObjectStorageBucketRequest = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketRequest, _super);
    function GetObjectStorageBucketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageBucketRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketPathParams)
    ], GetObjectStorageBucketRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketSecurity)
    ], GetObjectStorageBucketRequest.prototype, "security", void 0);
    return GetObjectStorageBucketRequest;
}(SpeakeasyBase));
export { GetObjectStorageBucketRequest };
var GetObjectStorageBucketResponse = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketResponse, _super);
    function GetObjectStorageBucketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageBucketResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectStorageBucket)
    ], GetObjectStorageBucketResponse.prototype, "objectStorageBucket", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObjectStorageBucketResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketDefaultApplicationJson)
    ], GetObjectStorageBucketResponse.prototype, "getObjectStorageBucketDefaultApplicationJsonObject", void 0);
    return GetObjectStorageBucketResponse;
}(SpeakeasyBase));
export { GetObjectStorageBucketResponse };
