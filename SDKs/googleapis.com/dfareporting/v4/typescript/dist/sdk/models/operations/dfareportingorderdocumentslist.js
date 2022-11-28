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
var DfareportingOrderDocumentsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingOrderDocumentsListPathParams, _super);
    function DfareportingOrderDocumentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListPathParams.prototype, "projectId", void 0);
    return DfareportingOrderDocumentsListPathParams;
}(SpeakeasyBase));
export { DfareportingOrderDocumentsListPathParams };
export var DfareportingOrderDocumentsListSortFieldEnum;
(function (DfareportingOrderDocumentsListSortFieldEnum) {
    DfareportingOrderDocumentsListSortFieldEnum["Id"] = "ID";
    DfareportingOrderDocumentsListSortFieldEnum["Name"] = "NAME";
})(DfareportingOrderDocumentsListSortFieldEnum || (DfareportingOrderDocumentsListSortFieldEnum = {}));
export var DfareportingOrderDocumentsListSortOrderEnum;
(function (DfareportingOrderDocumentsListSortOrderEnum) {
    DfareportingOrderDocumentsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingOrderDocumentsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingOrderDocumentsListSortOrderEnum || (DfareportingOrderDocumentsListSortOrderEnum = {}));
var DfareportingOrderDocumentsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingOrderDocumentsListQueryParams, _super);
    function DfareportingOrderDocumentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=approved" }),
        __metadata("design:type", Boolean)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "approved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderId" }),
        __metadata("design:type", Array)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteId" }),
        __metadata("design:type", Array)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingOrderDocumentsListQueryParams;
}(SpeakeasyBase));
export { DfareportingOrderDocumentsListQueryParams };
var DfareportingOrderDocumentsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingOrderDocumentsListSecurity, _super);
    function DfareportingOrderDocumentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingOrderDocumentsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingOrderDocumentsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingOrderDocumentsListSecurity;
}(SpeakeasyBase));
export { DfareportingOrderDocumentsListSecurity };
var DfareportingOrderDocumentsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingOrderDocumentsListRequest, _super);
    function DfareportingOrderDocumentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingOrderDocumentsListPathParams)
    ], DfareportingOrderDocumentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingOrderDocumentsListQueryParams)
    ], DfareportingOrderDocumentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingOrderDocumentsListSecurity)
    ], DfareportingOrderDocumentsListRequest.prototype, "security", void 0);
    return DfareportingOrderDocumentsListRequest;
}(SpeakeasyBase));
export { DfareportingOrderDocumentsListRequest };
var DfareportingOrderDocumentsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingOrderDocumentsListResponse, _super);
    function DfareportingOrderDocumentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingOrderDocumentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrderDocumentsListResponse)
    ], DfareportingOrderDocumentsListResponse.prototype, "orderDocumentsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingOrderDocumentsListResponse.prototype, "statusCode", void 0);
    return DfareportingOrderDocumentsListResponse;
}(SpeakeasyBase));
export { DfareportingOrderDocumentsListResponse };
