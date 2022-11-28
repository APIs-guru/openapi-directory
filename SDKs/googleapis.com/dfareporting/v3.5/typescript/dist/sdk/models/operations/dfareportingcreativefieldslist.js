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
var DfareportingCreativeFieldsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingCreativeFieldsListPathParams, _super);
    function DfareportingCreativeFieldsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListPathParams.prototype, "profileId", void 0);
    return DfareportingCreativeFieldsListPathParams;
}(SpeakeasyBase));
export { DfareportingCreativeFieldsListPathParams };
export var DfareportingCreativeFieldsListSortFieldEnum;
(function (DfareportingCreativeFieldsListSortFieldEnum) {
    DfareportingCreativeFieldsListSortFieldEnum["Id"] = "ID";
    DfareportingCreativeFieldsListSortFieldEnum["Name"] = "NAME";
})(DfareportingCreativeFieldsListSortFieldEnum || (DfareportingCreativeFieldsListSortFieldEnum = {}));
export var DfareportingCreativeFieldsListSortOrderEnum;
(function (DfareportingCreativeFieldsListSortOrderEnum) {
    DfareportingCreativeFieldsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingCreativeFieldsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingCreativeFieldsListSortOrderEnum || (DfareportingCreativeFieldsListSortOrderEnum = {}));
var DfareportingCreativeFieldsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingCreativeFieldsListQueryParams, _super);
    function DfareportingCreativeFieldsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserIds" }),
        __metadata("design:type", Array)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "advertiserIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingCreativeFieldsListQueryParams;
}(SpeakeasyBase));
export { DfareportingCreativeFieldsListQueryParams };
var DfareportingCreativeFieldsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingCreativeFieldsListSecurity, _super);
    function DfareportingCreativeFieldsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingCreativeFieldsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingCreativeFieldsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingCreativeFieldsListSecurity;
}(SpeakeasyBase));
export { DfareportingCreativeFieldsListSecurity };
var DfareportingCreativeFieldsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingCreativeFieldsListRequest, _super);
    function DfareportingCreativeFieldsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativeFieldsListPathParams)
    ], DfareportingCreativeFieldsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativeFieldsListQueryParams)
    ], DfareportingCreativeFieldsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCreativeFieldsListSecurity)
    ], DfareportingCreativeFieldsListRequest.prototype, "security", void 0);
    return DfareportingCreativeFieldsListRequest;
}(SpeakeasyBase));
export { DfareportingCreativeFieldsListRequest };
var DfareportingCreativeFieldsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingCreativeFieldsListResponse, _super);
    function DfareportingCreativeFieldsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingCreativeFieldsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreativeFieldsListResponse)
    ], DfareportingCreativeFieldsListResponse.prototype, "creativeFieldsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingCreativeFieldsListResponse.prototype, "statusCode", void 0);
    return DfareportingCreativeFieldsListResponse;
}(SpeakeasyBase));
export { DfareportingCreativeFieldsListResponse };
