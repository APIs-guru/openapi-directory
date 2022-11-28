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
var DfareportingTargetingTemplatesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesListPathParams, _super);
    function DfareportingTargetingTemplatesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListPathParams.prototype, "profileId", void 0);
    return DfareportingTargetingTemplatesListPathParams;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesListPathParams };
export var DfareportingTargetingTemplatesListSortFieldEnum;
(function (DfareportingTargetingTemplatesListSortFieldEnum) {
    DfareportingTargetingTemplatesListSortFieldEnum["Id"] = "ID";
    DfareportingTargetingTemplatesListSortFieldEnum["Name"] = "NAME";
})(DfareportingTargetingTemplatesListSortFieldEnum || (DfareportingTargetingTemplatesListSortFieldEnum = {}));
export var DfareportingTargetingTemplatesListSortOrderEnum;
(function (DfareportingTargetingTemplatesListSortOrderEnum) {
    DfareportingTargetingTemplatesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingTargetingTemplatesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingTargetingTemplatesListSortOrderEnum || (DfareportingTargetingTemplatesListSortOrderEnum = {}));
var DfareportingTargetingTemplatesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesListQueryParams, _super);
    function DfareportingTargetingTemplatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingTargetingTemplatesListQueryParams;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesListQueryParams };
var DfareportingTargetingTemplatesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesListSecurity, _super);
    function DfareportingTargetingTemplatesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingTargetingTemplatesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingTargetingTemplatesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingTargetingTemplatesListSecurity;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesListSecurity };
var DfareportingTargetingTemplatesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesListRequest, _super);
    function DfareportingTargetingTemplatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetingTemplatesListPathParams)
    ], DfareportingTargetingTemplatesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetingTemplatesListQueryParams)
    ], DfareportingTargetingTemplatesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingTargetingTemplatesListSecurity)
    ], DfareportingTargetingTemplatesListRequest.prototype, "security", void 0);
    return DfareportingTargetingTemplatesListRequest;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesListRequest };
var DfareportingTargetingTemplatesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingTargetingTemplatesListResponse, _super);
    function DfareportingTargetingTemplatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingTargetingTemplatesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingTargetingTemplatesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TargetingTemplatesListResponse)
    ], DfareportingTargetingTemplatesListResponse.prototype, "targetingTemplatesListResponse", void 0);
    return DfareportingTargetingTemplatesListResponse;
}(SpeakeasyBase));
export { DfareportingTargetingTemplatesListResponse };
