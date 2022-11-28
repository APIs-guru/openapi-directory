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
var HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListPathParams, _super);
    function HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListPathParams.prototype, "parent", void 0);
    return HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListPathParams };
export var HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListViewEnum;
(function (HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListViewEnum) {
    HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListViewEnum["AnnotationViewUnspecified"] = "ANNOTATION_VIEW_UNSPECIFIED";
    HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListViewEnum["AnnotationViewBasic"] = "ANNOTATION_VIEW_BASIC";
    HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListViewEnum["AnnotationViewFull"] = "ANNOTATION_VIEW_FULL";
})(HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListViewEnum || (HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListViewEnum = {}));
var HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams.prototype, "view", void 0);
    return HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams };
var HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity, _super);
    function HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity };
var HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListRequest, _super);
    function HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListPathParams)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListQueryParams)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListSecurity)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListRequest };
var HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse, _super);
    function HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAnnotationsResponse)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse.prototype, "listAnnotationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse };
