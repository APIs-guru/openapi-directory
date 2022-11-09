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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var EssentialcontactsProjectsContactsComputePathParams = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsComputePathParams, _super);
    function EssentialcontactsProjectsContactsComputePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputePathParams.prototype, "parent", void 0);
    return EssentialcontactsProjectsContactsComputePathParams;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsComputePathParams };
export var EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum;
(function (EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum) {
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum["NotificationCategoryUnspecified"] = "NOTIFICATION_CATEGORY_UNSPECIFIED";
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum["All"] = "ALL";
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum["Suspension"] = "SUSPENSION";
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum["Security"] = "SECURITY";
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum["Technical"] = "TECHNICAL";
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum["Billing"] = "BILLING";
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum["Legal"] = "LEGAL";
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum["ProductUpdates"] = "PRODUCT_UPDATES";
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum["TechnicalIncidents"] = "TECHNICAL_INCIDENTS";
})(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum || (EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum = {}));
var EssentialcontactsProjectsContactsComputeQueryParams = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsComputeQueryParams, _super);
    function EssentialcontactsProjectsContactsComputeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=notificationCategories" }),
        __metadata("design:type", Array)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "notificationCategories", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeQueryParams.prototype, "uploadProtocol", void 0);
    return EssentialcontactsProjectsContactsComputeQueryParams;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsComputeQueryParams };
var EssentialcontactsProjectsContactsComputeSecurity = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsComputeSecurity, _super);
    function EssentialcontactsProjectsContactsComputeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EssentialcontactsProjectsContactsComputeSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], EssentialcontactsProjectsContactsComputeSecurity.prototype, "oauth2c", void 0);
    return EssentialcontactsProjectsContactsComputeSecurity;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsComputeSecurity };
var EssentialcontactsProjectsContactsComputeRequest = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsComputeRequest, _super);
    function EssentialcontactsProjectsContactsComputeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsComputePathParams)
    ], EssentialcontactsProjectsContactsComputeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsComputeQueryParams)
    ], EssentialcontactsProjectsContactsComputeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EssentialcontactsProjectsContactsComputeSecurity)
    ], EssentialcontactsProjectsContactsComputeRequest.prototype, "security", void 0);
    return EssentialcontactsProjectsContactsComputeRequest;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsComputeRequest };
var EssentialcontactsProjectsContactsComputeResponse = /** @class */ (function (_super) {
    __extends(EssentialcontactsProjectsContactsComputeResponse, _super);
    function EssentialcontactsProjectsContactsComputeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], EssentialcontactsProjectsContactsComputeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudEssentialcontactsV1ComputeContactsResponse)
    ], EssentialcontactsProjectsContactsComputeResponse.prototype, "googleCloudEssentialcontactsV1ComputeContactsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], EssentialcontactsProjectsContactsComputeResponse.prototype, "statusCode", void 0);
    return EssentialcontactsProjectsContactsComputeResponse;
}(SpeakeasyBase));
export { EssentialcontactsProjectsContactsComputeResponse };
