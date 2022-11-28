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
var OsconfigProjectsPatchJobsInstanceDetailsListPathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchJobsInstanceDetailsListPathParams, _super);
    function OsconfigProjectsPatchJobsInstanceDetailsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListPathParams.prototype, "parent", void 0);
    return OsconfigProjectsPatchJobsInstanceDetailsListPathParams;
}(SpeakeasyBase));
export { OsconfigProjectsPatchJobsInstanceDetailsListPathParams };
var OsconfigProjectsPatchJobsInstanceDetailsListQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchJobsInstanceDetailsListQueryParams, _super);
    function OsconfigProjectsPatchJobsInstanceDetailsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsPatchJobsInstanceDetailsListQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsPatchJobsInstanceDetailsListQueryParams };
var OsconfigProjectsPatchJobsInstanceDetailsListSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchJobsInstanceDetailsListSecurity, _super);
    function OsconfigProjectsPatchJobsInstanceDetailsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsPatchJobsInstanceDetailsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsPatchJobsInstanceDetailsListSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsPatchJobsInstanceDetailsListSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsPatchJobsInstanceDetailsListSecurity };
var OsconfigProjectsPatchJobsInstanceDetailsListRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchJobsInstanceDetailsListRequest, _super);
    function OsconfigProjectsPatchJobsInstanceDetailsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchJobsInstanceDetailsListPathParams)
    ], OsconfigProjectsPatchJobsInstanceDetailsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchJobsInstanceDetailsListQueryParams)
    ], OsconfigProjectsPatchJobsInstanceDetailsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsPatchJobsInstanceDetailsListSecurity)
    ], OsconfigProjectsPatchJobsInstanceDetailsListRequest.prototype, "security", void 0);
    return OsconfigProjectsPatchJobsInstanceDetailsListRequest;
}(SpeakeasyBase));
export { OsconfigProjectsPatchJobsInstanceDetailsListRequest };
var OsconfigProjectsPatchJobsInstanceDetailsListResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsPatchJobsInstanceDetailsListResponse, _super);
    function OsconfigProjectsPatchJobsInstanceDetailsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsPatchJobsInstanceDetailsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPatchJobInstanceDetailsResponse)
    ], OsconfigProjectsPatchJobsInstanceDetailsListResponse.prototype, "listPatchJobInstanceDetailsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsPatchJobsInstanceDetailsListResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsPatchJobsInstanceDetailsListResponse;
}(SpeakeasyBase));
export { OsconfigProjectsPatchJobsInstanceDetailsListResponse };
