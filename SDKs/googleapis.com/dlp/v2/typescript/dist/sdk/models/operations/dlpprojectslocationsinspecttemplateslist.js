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
var DlpProjectsLocationsInspectTemplatesListPathParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsInspectTemplatesListPathParams, _super);
    function DlpProjectsLocationsInspectTemplatesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListPathParams.prototype, "parent", void 0);
    return DlpProjectsLocationsInspectTemplatesListPathParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsInspectTemplatesListPathParams };
var DlpProjectsLocationsInspectTemplatesListQueryParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsInspectTemplatesListQueryParams, _super);
    function DlpProjectsLocationsInspectTemplatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListQueryParams.prototype, "uploadProtocol", void 0);
    return DlpProjectsLocationsInspectTemplatesListQueryParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsInspectTemplatesListQueryParams };
var DlpProjectsLocationsInspectTemplatesListSecurity = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsInspectTemplatesListSecurity, _super);
    function DlpProjectsLocationsInspectTemplatesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DlpProjectsLocationsInspectTemplatesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DlpProjectsLocationsInspectTemplatesListSecurity.prototype, "oauth2c", void 0);
    return DlpProjectsLocationsInspectTemplatesListSecurity;
}(SpeakeasyBase));
export { DlpProjectsLocationsInspectTemplatesListSecurity };
var DlpProjectsLocationsInspectTemplatesListRequest = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsInspectTemplatesListRequest, _super);
    function DlpProjectsLocationsInspectTemplatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsInspectTemplatesListPathParams)
    ], DlpProjectsLocationsInspectTemplatesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsInspectTemplatesListQueryParams)
    ], DlpProjectsLocationsInspectTemplatesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsInspectTemplatesListSecurity)
    ], DlpProjectsLocationsInspectTemplatesListRequest.prototype, "security", void 0);
    return DlpProjectsLocationsInspectTemplatesListRequest;
}(SpeakeasyBase));
export { DlpProjectsLocationsInspectTemplatesListRequest };
var DlpProjectsLocationsInspectTemplatesListResponse = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsInspectTemplatesListResponse, _super);
    function DlpProjectsLocationsInspectTemplatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePrivacyDlpV2ListInspectTemplatesResponse)
    ], DlpProjectsLocationsInspectTemplatesListResponse.prototype, "googlePrivacyDlpV2ListInspectTemplatesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DlpProjectsLocationsInspectTemplatesListResponse.prototype, "statusCode", void 0);
    return DlpProjectsLocationsInspectTemplatesListResponse;
}(SpeakeasyBase));
export { DlpProjectsLocationsInspectTemplatesListResponse };
