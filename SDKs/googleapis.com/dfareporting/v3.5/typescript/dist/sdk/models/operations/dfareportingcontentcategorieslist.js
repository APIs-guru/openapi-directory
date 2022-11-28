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
var DfareportingContentCategoriesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingContentCategoriesListPathParams, _super);
    function DfareportingContentCategoriesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListPathParams.prototype, "profileId", void 0);
    return DfareportingContentCategoriesListPathParams;
}(SpeakeasyBase));
export { DfareportingContentCategoriesListPathParams };
export var DfareportingContentCategoriesListSortFieldEnum;
(function (DfareportingContentCategoriesListSortFieldEnum) {
    DfareportingContentCategoriesListSortFieldEnum["Id"] = "ID";
    DfareportingContentCategoriesListSortFieldEnum["Name"] = "NAME";
})(DfareportingContentCategoriesListSortFieldEnum || (DfareportingContentCategoriesListSortFieldEnum = {}));
export var DfareportingContentCategoriesListSortOrderEnum;
(function (DfareportingContentCategoriesListSortOrderEnum) {
    DfareportingContentCategoriesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingContentCategoriesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingContentCategoriesListSortOrderEnum || (DfareportingContentCategoriesListSortOrderEnum = {}));
var DfareportingContentCategoriesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingContentCategoriesListQueryParams, _super);
    function DfareportingContentCategoriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingContentCategoriesListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingContentCategoriesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingContentCategoriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingContentCategoriesListQueryParams;
}(SpeakeasyBase));
export { DfareportingContentCategoriesListQueryParams };
var DfareportingContentCategoriesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingContentCategoriesListSecurity, _super);
    function DfareportingContentCategoriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingContentCategoriesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingContentCategoriesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingContentCategoriesListSecurity;
}(SpeakeasyBase));
export { DfareportingContentCategoriesListSecurity };
var DfareportingContentCategoriesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingContentCategoriesListRequest, _super);
    function DfareportingContentCategoriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingContentCategoriesListPathParams)
    ], DfareportingContentCategoriesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingContentCategoriesListQueryParams)
    ], DfareportingContentCategoriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingContentCategoriesListSecurity)
    ], DfareportingContentCategoriesListRequest.prototype, "security", void 0);
    return DfareportingContentCategoriesListRequest;
}(SpeakeasyBase));
export { DfareportingContentCategoriesListRequest };
var DfareportingContentCategoriesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingContentCategoriesListResponse, _super);
    function DfareportingContentCategoriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContentCategoriesListResponse)
    ], DfareportingContentCategoriesListResponse.prototype, "contentCategoriesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingContentCategoriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingContentCategoriesListResponse.prototype, "statusCode", void 0);
    return DfareportingContentCategoriesListResponse;
}(SpeakeasyBase));
export { DfareportingContentCategoriesListResponse };
