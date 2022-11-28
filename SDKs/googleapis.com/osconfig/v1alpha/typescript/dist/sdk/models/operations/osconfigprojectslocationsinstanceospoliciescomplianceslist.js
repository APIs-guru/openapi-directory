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
var OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams, _super);
    function OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams.prototype, "parent", void 0);
    return OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams };
var OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams, _super);
    function OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams };
var OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity, _super);
    function OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity };
var OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest, _super);
    function OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest.prototype, "security", void 0);
    return OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest };
var OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse, _super);
    function OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListInstanceOsPoliciesCompliancesResponse)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse.prototype, "listInstanceOsPoliciesCompliancesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse };
