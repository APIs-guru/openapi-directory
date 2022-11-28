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
var DfareportingDirectorySitesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingDirectorySitesListPathParams, _super);
    function DfareportingDirectorySitesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListPathParams.prototype, "profileId", void 0);
    return DfareportingDirectorySitesListPathParams;
}(SpeakeasyBase));
export { DfareportingDirectorySitesListPathParams };
export var DfareportingDirectorySitesListSortFieldEnum;
(function (DfareportingDirectorySitesListSortFieldEnum) {
    DfareportingDirectorySitesListSortFieldEnum["Id"] = "ID";
    DfareportingDirectorySitesListSortFieldEnum["Name"] = "NAME";
})(DfareportingDirectorySitesListSortFieldEnum || (DfareportingDirectorySitesListSortFieldEnum = {}));
export var DfareportingDirectorySitesListSortOrderEnum;
(function (DfareportingDirectorySitesListSortOrderEnum) {
    DfareportingDirectorySitesListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingDirectorySitesListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingDirectorySitesListSortOrderEnum || (DfareportingDirectorySitesListSortOrderEnum = {}));
var DfareportingDirectorySitesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingDirectorySitesListQueryParams, _super);
    function DfareportingDirectorySitesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acceptsInStreamVideoPlacements" }),
        __metadata("design:type", Boolean)
    ], DfareportingDirectorySitesListQueryParams.prototype, "acceptsInStreamVideoPlacements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acceptsInterstitialPlacements" }),
        __metadata("design:type", Boolean)
    ], DfareportingDirectorySitesListQueryParams.prototype, "acceptsInterstitialPlacements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acceptsPublisherPaidPlacements" }),
        __metadata("design:type", Boolean)
    ], DfareportingDirectorySitesListQueryParams.prototype, "acceptsPublisherPaidPlacements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=active" }),
        __metadata("design:type", Boolean)
    ], DfareportingDirectorySitesListQueryParams.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dfpNetworkCode" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "dfpNetworkCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingDirectorySitesListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingDirectorySitesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingDirectorySitesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "searchString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingDirectorySitesListQueryParams;
}(SpeakeasyBase));
export { DfareportingDirectorySitesListQueryParams };
var DfareportingDirectorySitesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingDirectorySitesListSecurity, _super);
    function DfareportingDirectorySitesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingDirectorySitesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingDirectorySitesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingDirectorySitesListSecurity;
}(SpeakeasyBase));
export { DfareportingDirectorySitesListSecurity };
var DfareportingDirectorySitesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingDirectorySitesListRequest, _super);
    function DfareportingDirectorySitesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingDirectorySitesListPathParams)
    ], DfareportingDirectorySitesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingDirectorySitesListQueryParams)
    ], DfareportingDirectorySitesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingDirectorySitesListSecurity)
    ], DfareportingDirectorySitesListRequest.prototype, "security", void 0);
    return DfareportingDirectorySitesListRequest;
}(SpeakeasyBase));
export { DfareportingDirectorySitesListRequest };
var DfareportingDirectorySitesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingDirectorySitesListResponse, _super);
    function DfareportingDirectorySitesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingDirectorySitesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DirectorySitesListResponse)
    ], DfareportingDirectorySitesListResponse.prototype, "directorySitesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingDirectorySitesListResponse.prototype, "statusCode", void 0);
    return DfareportingDirectorySitesListResponse;
}(SpeakeasyBase));
export { DfareportingDirectorySitesListResponse };
