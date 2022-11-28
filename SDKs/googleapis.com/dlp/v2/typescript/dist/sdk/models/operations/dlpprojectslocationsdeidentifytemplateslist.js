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
var DlpProjectsLocationsDeidentifyTemplatesListPathParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsDeidentifyTemplatesListPathParams, _super);
    function DlpProjectsLocationsDeidentifyTemplatesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListPathParams.prototype, "parent", void 0);
    return DlpProjectsLocationsDeidentifyTemplatesListPathParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsDeidentifyTemplatesListPathParams };
var DlpProjectsLocationsDeidentifyTemplatesListQueryParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsDeidentifyTemplatesListQueryParams, _super);
    function DlpProjectsLocationsDeidentifyTemplatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListQueryParams.prototype, "uploadProtocol", void 0);
    return DlpProjectsLocationsDeidentifyTemplatesListQueryParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsDeidentifyTemplatesListQueryParams };
var DlpProjectsLocationsDeidentifyTemplatesListSecurity = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsDeidentifyTemplatesListSecurity, _super);
    function DlpProjectsLocationsDeidentifyTemplatesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DlpProjectsLocationsDeidentifyTemplatesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DlpProjectsLocationsDeidentifyTemplatesListSecurity.prototype, "oauth2c", void 0);
    return DlpProjectsLocationsDeidentifyTemplatesListSecurity;
}(SpeakeasyBase));
export { DlpProjectsLocationsDeidentifyTemplatesListSecurity };
var DlpProjectsLocationsDeidentifyTemplatesListRequest = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsDeidentifyTemplatesListRequest, _super);
    function DlpProjectsLocationsDeidentifyTemplatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsDeidentifyTemplatesListPathParams)
    ], DlpProjectsLocationsDeidentifyTemplatesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsDeidentifyTemplatesListQueryParams)
    ], DlpProjectsLocationsDeidentifyTemplatesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsDeidentifyTemplatesListSecurity)
    ], DlpProjectsLocationsDeidentifyTemplatesListRequest.prototype, "security", void 0);
    return DlpProjectsLocationsDeidentifyTemplatesListRequest;
}(SpeakeasyBase));
export { DlpProjectsLocationsDeidentifyTemplatesListRequest };
var DlpProjectsLocationsDeidentifyTemplatesListResponse = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsDeidentifyTemplatesListResponse, _super);
    function DlpProjectsLocationsDeidentifyTemplatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDeidentifyTemplatesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePrivacyDlpV2ListDeidentifyTemplatesResponse)
    ], DlpProjectsLocationsDeidentifyTemplatesListResponse.prototype, "googlePrivacyDlpV2ListDeidentifyTemplatesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DlpProjectsLocationsDeidentifyTemplatesListResponse.prototype, "statusCode", void 0);
    return DlpProjectsLocationsDeidentifyTemplatesListResponse;
}(SpeakeasyBase));
export { DlpProjectsLocationsDeidentifyTemplatesListResponse };
