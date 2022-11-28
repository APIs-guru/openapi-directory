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
var ContentOrdersListPathParams = /** @class */ (function (_super) {
    __extends(ContentOrdersListPathParams, _super);
    function ContentOrdersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrdersListPathParams.prototype, "merchantId", void 0);
    return ContentOrdersListPathParams;
}(SpeakeasyBase));
export { ContentOrdersListPathParams };
export var ContentOrdersListStatusesEnum;
(function (ContentOrdersListStatusesEnum) {
    ContentOrdersListStatusesEnum["Active"] = "ACTIVE";
    ContentOrdersListStatusesEnum["Completed"] = "COMPLETED";
    ContentOrdersListStatusesEnum["Canceled"] = "CANCELED";
    ContentOrdersListStatusesEnum["InProgress"] = "IN_PROGRESS";
    ContentOrdersListStatusesEnum["PendingShipment"] = "PENDING_SHIPMENT";
    ContentOrdersListStatusesEnum["PartiallyShipped"] = "PARTIALLY_SHIPPED";
    ContentOrdersListStatusesEnum["Shipped"] = "SHIPPED";
    ContentOrdersListStatusesEnum["PartiallyDelivered"] = "PARTIALLY_DELIVERED";
    ContentOrdersListStatusesEnum["Delivered"] = "DELIVERED";
    ContentOrdersListStatusesEnum["PartiallyReturned"] = "PARTIALLY_RETURNED";
    ContentOrdersListStatusesEnum["Returned"] = "RETURNED";
})(ContentOrdersListStatusesEnum || (ContentOrdersListStatusesEnum = {}));
var ContentOrdersListQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrdersListQueryParams, _super);
    function ContentOrdersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acknowledged" }),
        __metadata("design:type", Boolean)
    ], ContentOrdersListQueryParams.prototype, "acknowledged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ContentOrdersListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placedDateEnd" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "placedDateEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=placedDateStart" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "placedDateStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrdersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=statuses" }),
        __metadata("design:type", Array)
    ], ContentOrdersListQueryParams.prototype, "statuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrdersListQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrdersListQueryParams;
}(SpeakeasyBase));
export { ContentOrdersListQueryParams };
var ContentOrdersListSecurity = /** @class */ (function (_super) {
    __extends(ContentOrdersListSecurity, _super);
    function ContentOrdersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrdersListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrdersListSecurity.prototype, "oauth2c", void 0);
    return ContentOrdersListSecurity;
}(SpeakeasyBase));
export { ContentOrdersListSecurity };
var ContentOrdersListRequest = /** @class */ (function (_super) {
    __extends(ContentOrdersListRequest, _super);
    function ContentOrdersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersListPathParams)
    ], ContentOrdersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersListQueryParams)
    ], ContentOrdersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersListSecurity)
    ], ContentOrdersListRequest.prototype, "security", void 0);
    return ContentOrdersListRequest;
}(SpeakeasyBase));
export { ContentOrdersListRequest };
var ContentOrdersListResponse = /** @class */ (function (_super) {
    __extends(ContentOrdersListResponse, _super);
    function ContentOrdersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrdersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrdersListResponse)
    ], ContentOrdersListResponse.prototype, "ordersListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrdersListResponse.prototype, "statusCode", void 0);
    return ContentOrdersListResponse;
}(SpeakeasyBase));
export { ContentOrdersListResponse };
