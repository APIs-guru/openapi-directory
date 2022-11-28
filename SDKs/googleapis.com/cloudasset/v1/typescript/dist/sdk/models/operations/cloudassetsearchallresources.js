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
var CloudassetSearchAllResourcesPathParams = /** @class */ (function (_super) {
    __extends(CloudassetSearchAllResourcesPathParams, _super);
    function CloudassetSearchAllResourcesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scope" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesPathParams.prototype, "scope", void 0);
    return CloudassetSearchAllResourcesPathParams;
}(SpeakeasyBase));
export { CloudassetSearchAllResourcesPathParams };
var CloudassetSearchAllResourcesQueryParams = /** @class */ (function (_super) {
    __extends(CloudassetSearchAllResourcesQueryParams, _super);
    function CloudassetSearchAllResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assetTypes" }),
        __metadata("design:type", Array)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "assetTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesQueryParams.prototype, "uploadProtocol", void 0);
    return CloudassetSearchAllResourcesQueryParams;
}(SpeakeasyBase));
export { CloudassetSearchAllResourcesQueryParams };
var CloudassetSearchAllResourcesSecurity = /** @class */ (function (_super) {
    __extends(CloudassetSearchAllResourcesSecurity, _super);
    function CloudassetSearchAllResourcesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudassetSearchAllResourcesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudassetSearchAllResourcesSecurity.prototype, "oauth2c", void 0);
    return CloudassetSearchAllResourcesSecurity;
}(SpeakeasyBase));
export { CloudassetSearchAllResourcesSecurity };
var CloudassetSearchAllResourcesRequest = /** @class */ (function (_super) {
    __extends(CloudassetSearchAllResourcesRequest, _super);
    function CloudassetSearchAllResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetSearchAllResourcesPathParams)
    ], CloudassetSearchAllResourcesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetSearchAllResourcesQueryParams)
    ], CloudassetSearchAllResourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetSearchAllResourcesSecurity)
    ], CloudassetSearchAllResourcesRequest.prototype, "security", void 0);
    return CloudassetSearchAllResourcesRequest;
}(SpeakeasyBase));
export { CloudassetSearchAllResourcesRequest };
var CloudassetSearchAllResourcesResponse = /** @class */ (function (_super) {
    __extends(CloudassetSearchAllResourcesResponse, _super);
    function CloudassetSearchAllResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudassetSearchAllResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchAllResourcesResponse)
    ], CloudassetSearchAllResourcesResponse.prototype, "searchAllResourcesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudassetSearchAllResourcesResponse.prototype, "statusCode", void 0);
    return CloudassetSearchAllResourcesResponse;
}(SpeakeasyBase));
export { CloudassetSearchAllResourcesResponse };
