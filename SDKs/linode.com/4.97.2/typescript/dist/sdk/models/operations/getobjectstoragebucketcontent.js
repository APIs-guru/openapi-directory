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
export var GetObjectStorageBucketContentServerList = [
    "https://api.linode.com/v4",
];
var GetObjectStorageBucketContentPathParams = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketContentPathParams, _super);
    function GetObjectStorageBucketContentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], GetObjectStorageBucketContentPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", String)
    ], GetObjectStorageBucketContentPathParams.prototype, "clusterId", void 0);
    return GetObjectStorageBucketContentPathParams;
}(SpeakeasyBase));
export { GetObjectStorageBucketContentPathParams };
var GetObjectStorageBucketContentQueryParams = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketContentQueryParams, _super);
    function GetObjectStorageBucketContentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delimiter" }),
        __metadata("design:type", String)
    ], GetObjectStorageBucketContentQueryParams.prototype, "delimiter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marker" }),
        __metadata("design:type", String)
    ], GetObjectStorageBucketContentQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetObjectStorageBucketContentQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefix" }),
        __metadata("design:type", String)
    ], GetObjectStorageBucketContentQueryParams.prototype, "prefix", void 0);
    return GetObjectStorageBucketContentQueryParams;
}(SpeakeasyBase));
export { GetObjectStorageBucketContentQueryParams };
var GetObjectStorageBucketContentSecurity = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketContentSecurity, _super);
    function GetObjectStorageBucketContentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetObjectStorageBucketContentSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetObjectStorageBucketContentSecurity.prototype, "oauth", void 0);
    return GetObjectStorageBucketContentSecurity;
}(SpeakeasyBase));
export { GetObjectStorageBucketContentSecurity };
var GetObjectStorageBucketContentDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketContentDefaultApplicationJson, _super);
    function GetObjectStorageBucketContentDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetObjectStorageBucketContentDefaultApplicationJson.prototype, "errors", void 0);
    return GetObjectStorageBucketContentDefaultApplicationJson;
}(SpeakeasyBase));
export { GetObjectStorageBucketContentDefaultApplicationJson };
var GetObjectStorageBucketContentRequest = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketContentRequest, _super);
    function GetObjectStorageBucketContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageBucketContentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketContentPathParams)
    ], GetObjectStorageBucketContentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketContentQueryParams)
    ], GetObjectStorageBucketContentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketContentSecurity)
    ], GetObjectStorageBucketContentRequest.prototype, "security", void 0);
    return GetObjectStorageBucketContentRequest;
}(SpeakeasyBase));
export { GetObjectStorageBucketContentRequest };
var GetObjectStorageBucketContentResponse = /** @class */ (function (_super) {
    __extends(GetObjectStorageBucketContentResponse, _super);
    function GetObjectStorageBucketContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetObjectStorageBucketContentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetObjectStorageBucketContentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetObjectStorageBucketContentResponse.prototype, "getObjectStorageBucketContent200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetObjectStorageBucketContentDefaultApplicationJson)
    ], GetObjectStorageBucketContentResponse.prototype, "getObjectStorageBucketContentDefaultApplicationJsonObject", void 0);
    return GetObjectStorageBucketContentResponse;
}(SpeakeasyBase));
export { GetObjectStorageBucketContentResponse };
