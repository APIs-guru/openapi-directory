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
var CloudbuildProjectsLocationsBitbucketServerConfigsListPathParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBitbucketServerConfigsListPathParams, _super);
    function CloudbuildProjectsLocationsBitbucketServerConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListPathParams.prototype, "parent", void 0);
    return CloudbuildProjectsLocationsBitbucketServerConfigsListPathParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBitbucketServerConfigsListPathParams };
var CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams, _super);
    function CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams };
var CloudbuildProjectsLocationsBitbucketServerConfigsListSecurity = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBitbucketServerConfigsListSecurity, _super);
    function CloudbuildProjectsLocationsBitbucketServerConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListSecurity.prototype, "oauth2c", void 0);
    return CloudbuildProjectsLocationsBitbucketServerConfigsListSecurity;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBitbucketServerConfigsListSecurity };
var CloudbuildProjectsLocationsBitbucketServerConfigsListRequest = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBitbucketServerConfigsListRequest, _super);
    function CloudbuildProjectsLocationsBitbucketServerConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsBitbucketServerConfigsListPathParams)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsBitbucketServerConfigsListQueryParams)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbuildProjectsLocationsBitbucketServerConfigsListSecurity)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListRequest.prototype, "security", void 0);
    return CloudbuildProjectsLocationsBitbucketServerConfigsListRequest;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBitbucketServerConfigsListRequest };
var CloudbuildProjectsLocationsBitbucketServerConfigsListResponse = /** @class */ (function (_super) {
    __extends(CloudbuildProjectsLocationsBitbucketServerConfigsListResponse, _super);
    function CloudbuildProjectsLocationsBitbucketServerConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBitbucketServerConfigsResponse)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListResponse.prototype, "listBitbucketServerConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbuildProjectsLocationsBitbucketServerConfigsListResponse.prototype, "statusCode", void 0);
    return CloudbuildProjectsLocationsBitbucketServerConfigsListResponse;
}(SpeakeasyBase));
export { CloudbuildProjectsLocationsBitbucketServerConfigsListResponse };
