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
var ContentOrderreturnsListPathParams = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsListPathParams, _super);
    function ContentOrderreturnsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListPathParams.prototype, "merchantId", void 0);
    return ContentOrderreturnsListPathParams;
}(SpeakeasyBase));
export { ContentOrderreturnsListPathParams };
export var ContentOrderreturnsListOrderByEnum;
(function (ContentOrderreturnsListOrderByEnum) {
    ContentOrderreturnsListOrderByEnum["ReturnCreationTimeDesc"] = "RETURN_CREATION_TIME_DESC";
    ContentOrderreturnsListOrderByEnum["ReturnCreationTimeAsc"] = "RETURN_CREATION_TIME_ASC";
})(ContentOrderreturnsListOrderByEnum || (ContentOrderreturnsListOrderByEnum = {}));
export var ContentOrderreturnsListShipmentStatesEnum;
(function (ContentOrderreturnsListShipmentStatesEnum) {
    ContentOrderreturnsListShipmentStatesEnum["New"] = "NEW";
    ContentOrderreturnsListShipmentStatesEnum["Shipped"] = "SHIPPED";
    ContentOrderreturnsListShipmentStatesEnum["Completed"] = "COMPLETED";
    ContentOrderreturnsListShipmentStatesEnum["Undeliverable"] = "UNDELIVERABLE";
    ContentOrderreturnsListShipmentStatesEnum["Pending"] = "PENDING";
})(ContentOrderreturnsListShipmentStatesEnum || (ContentOrderreturnsListShipmentStatesEnum = {}));
export var ContentOrderreturnsListShipmentStatusEnum;
(function (ContentOrderreturnsListShipmentStatusEnum) {
    ContentOrderreturnsListShipmentStatusEnum["New"] = "NEW";
    ContentOrderreturnsListShipmentStatusEnum["InProgress"] = "IN_PROGRESS";
    ContentOrderreturnsListShipmentStatusEnum["Processed"] = "PROCESSED";
})(ContentOrderreturnsListShipmentStatusEnum || (ContentOrderreturnsListShipmentStatusEnum = {}));
export var ContentOrderreturnsListShipmentTypesEnum;
(function (ContentOrderreturnsListShipmentTypesEnum) {
    ContentOrderreturnsListShipmentTypesEnum["ByMail"] = "BY_MAIL";
    ContentOrderreturnsListShipmentTypesEnum["Returnless"] = "RETURNLESS";
    ContentOrderreturnsListShipmentTypesEnum["ContactCustomerSupport"] = "CONTACT_CUSTOMER_SUPPORT";
})(ContentOrderreturnsListShipmentTypesEnum || (ContentOrderreturnsListShipmentTypesEnum = {}));
var ContentOrderreturnsListQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsListQueryParams, _super);
    function ContentOrderreturnsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acknowledged" }),
        __metadata("design:type", Boolean)
    ], ContentOrderreturnsListQueryParams.prototype, "acknowledged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdEndDate" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "createdEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdStartDate" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "createdStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleOrderIds" }),
        __metadata("design:type", Array)
    ], ContentOrderreturnsListQueryParams.prototype, "googleOrderIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ContentOrderreturnsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrderreturnsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipmentStates" }),
        __metadata("design:type", Array)
    ], ContentOrderreturnsListQueryParams.prototype, "shipmentStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipmentStatus" }),
        __metadata("design:type", Array)
    ], ContentOrderreturnsListQueryParams.prototype, "shipmentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipmentTrackingNumbers" }),
        __metadata("design:type", Array)
    ], ContentOrderreturnsListQueryParams.prototype, "shipmentTrackingNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shipmentTypes" }),
        __metadata("design:type", Array)
    ], ContentOrderreturnsListQueryParams.prototype, "shipmentTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsListQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrderreturnsListQueryParams;
}(SpeakeasyBase));
export { ContentOrderreturnsListQueryParams };
var ContentOrderreturnsListSecurity = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsListSecurity, _super);
    function ContentOrderreturnsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrderreturnsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrderreturnsListSecurity.prototype, "oauth2c", void 0);
    return ContentOrderreturnsListSecurity;
}(SpeakeasyBase));
export { ContentOrderreturnsListSecurity };
var ContentOrderreturnsListRequest = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsListRequest, _super);
    function ContentOrderreturnsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreturnsListPathParams)
    ], ContentOrderreturnsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreturnsListQueryParams)
    ], ContentOrderreturnsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreturnsListSecurity)
    ], ContentOrderreturnsListRequest.prototype, "security", void 0);
    return ContentOrderreturnsListRequest;
}(SpeakeasyBase));
export { ContentOrderreturnsListRequest };
var ContentOrderreturnsListResponse = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsListResponse, _super);
    function ContentOrderreturnsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrderreturnsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrderreturnsListResponse)
    ], ContentOrderreturnsListResponse.prototype, "orderreturnsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrderreturnsListResponse.prototype, "statusCode", void 0);
    return ContentOrderreturnsListResponse;
}(SpeakeasyBase));
export { ContentOrderreturnsListResponse };
