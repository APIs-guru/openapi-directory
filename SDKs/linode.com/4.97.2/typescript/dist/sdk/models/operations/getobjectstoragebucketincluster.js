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
export var GetObjectStorageBucketinClusterServerList = [
    "https://api.linode.com/v4",
];
var GetObjectStorageBucketinClusterPathParams = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketinClusterPathParams, _super);
    function GetObjectStorageBucketinClusterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], GetObjectStorageBucketinClusterPathParams.prototype, "clusterId", void 0);
    return GetObjectStorageBucketinClusterPathParams;
}(SpeakeasyBase));
export { GetObjectStorageBucketinClusterPathParams };
var GetObjectStorageBucketinClusterSecurity = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketinClusterSecurity, _super);
    function GetObjectStorageBucketinClusterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetObjectStorageBucketinClusterSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetObjectStorageBucketinClusterSecurity.prototype, "oauth", void 0);
    return GetObjectStorageBucketinClusterSecurity;
}(SpeakeasyBase));
export { GetObjectStorageBucketinClusterSecurity };
var GetObjectStorageBucketinCluster200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketinCluster200ApplicationJson, _super);
    function GetObjectStorageBucketinCluster200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ObjectStorageBucket }),
        __metadata("design:type", Array)
    ], GetObjectStorageBucketinCluster200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetObjectStorageBucketinCluster200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetObjectStorageBucketinCluster200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetObjectStorageBucketinCluster200ApplicationJson.prototype, "results", void 0);
    return GetObjectStorageBucketinCluster200ApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageBucketinCluster200ApplicationJson };
var GetObjectStorageBucketinClusterDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketinClusterDefaultApplicationJson, _super);
    function GetObjectStorageBucketinClusterDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetObjectStorageBucketinClusterDefaultApplicationJson.prototype, "errors", void 0);
    return GetObjectStorageBucketinClusterDefaultApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageBucketinClusterDefaultApplicationJson };
var GetObjectStorageBucketinClusterRequest = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketinClusterRequest, _super);
    function GetObjectStorageBucketinClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageBucketinClusterRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketinClusterPathParams)
    ], GetObjectStorageBucketinClusterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketinClusterSecurity)
    ], GetObjectStorageBucketinClusterRequest.prototype, "security", void 0);
    return GetObjectStorageBucketinClusterRequest;
}(SpeakeasyBase));
export { GetObjectStorageBucketinClusterRequest };
var GetObjectStorageBucketinClusterResponse = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketinClusterResponse, _super);
    function GetObjectStorageBucketinClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageBucketinClusterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObjectStorageBucketinClusterResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketinCluster200ApplicationJson)
    ], GetObjectStorageBucketinClusterResponse.prototype, "getObjectStorageBucketinCluster200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketinClusterDefaultApplicationJson)
    ], GetObjectStorageBucketinClusterResponse.prototype, "getObjectStorageBucketinClusterDefaultApplicationJsonObject", void 0);
    return GetObjectStorageBucketinClusterResponse;
}(SpeakeasyBase));
export { GetObjectStorageBucketinClusterResponse };
