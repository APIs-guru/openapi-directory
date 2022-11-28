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
var DfareportingSubaccountsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingSubaccountsListPathParams, _super);
    function DfareportingSubaccountsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListPathParams.prototype, "profileId", void 0);
    return DfareportingSubaccountsListPathParams;
}(SpeakeasyBase));
export { DfareportingSubaccountsListPathParams };
export var DfareportingSubaccountsListSortFieldEnum;
(function (DfareportingSubaccountsListSortFieldEnum) {
    DfareportingSubaccountsListSortFieldEnum["Id"] = "ID";
    DfareportingSubaccountsListSortFieldEnum["Name"] = "NAME";
})(DfareportingSubaccountsListSortFieldEnum || (DfareportingSubaccountsListSortFieldEnum = {}));
export var DfareportingSubaccountsListSortOrderEnum;
(function (DfareportingSubaccountsListSortOrderEnum) {
    DfareportingSubaccountsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingSubaccountsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingSubaccountsListSortOrderEnum || (DfareportingSubaccountsListSortOrderEnum = {}));
var DfareportingSubaccountsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingSubaccountsListQueryParams, _super);
    function DfareportingSubaccountsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingSubaccountsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingSubaccountsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingSubaccountsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingSubaccountsListQueryParams;
}(SpeakeasyBase));
export { DfareportingSubaccountsListQueryParams };
var DfareportingSubaccountsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingSubaccountsListSecurity, _super);
    function DfareportingSubaccountsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingSubaccountsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingSubaccountsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingSubaccountsListSecurity;
}(SpeakeasyBase));
export { DfareportingSubaccountsListSecurity };
var DfareportingSubaccountsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingSubaccountsListRequest, _super);
    function DfareportingSubaccountsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingSubaccountsListPathParams)
    ], DfareportingSubaccountsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingSubaccountsListQueryParams)
    ], DfareportingSubaccountsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingSubaccountsListSecurity)
    ], DfareportingSubaccountsListRequest.prototype, "security", void 0);
    return DfareportingSubaccountsListRequest;
}(SpeakeasyBase));
export { DfareportingSubaccountsListRequest };
var DfareportingSubaccountsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingSubaccountsListResponse, _super);
    function DfareportingSubaccountsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingSubaccountsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingSubaccountsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubaccountsListResponse)
    ], DfareportingSubaccountsListResponse.prototype, "subaccountsListResponse", void 0);
    return DfareportingSubaccountsListResponse;
}(SpeakeasyBase));
export { DfareportingSubaccountsListResponse };
