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
var PeoplePeopleConnectionsListPathParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListPathParams, _super);
    function PeoplePeopleConnectionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListPathParams.prototype, "resourceName", void 0);
    return PeoplePeopleConnectionsListPathParams;
}(SpeakeasyBase));
export { PeoplePeopleConnectionsListPathParams };
export var PeoplePeopleConnectionsListSortOrderEnum;
(function (PeoplePeopleConnectionsListSortOrderEnum) {
    PeoplePeopleConnectionsListSortOrderEnum["LastModifiedAscending"] = "LAST_MODIFIED_ASCENDING";
    PeoplePeopleConnectionsListSortOrderEnum["LastModifiedDescending"] = "LAST_MODIFIED_DESCENDING";
    PeoplePeopleConnectionsListSortOrderEnum["FirstNameAscending"] = "FIRST_NAME_ASCENDING";
    PeoplePeopleConnectionsListSortOrderEnum["LastNameAscending"] = "LAST_NAME_ASCENDING";
})(PeoplePeopleConnectionsListSortOrderEnum || (PeoplePeopleConnectionsListSortOrderEnum = {}));
export var PeoplePeopleConnectionsListSourcesEnum;
(function (PeoplePeopleConnectionsListSourcesEnum) {
    PeoplePeopleConnectionsListSourcesEnum["ReadSourceTypeUnspecified"] = "READ_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleConnectionsListSourcesEnum["ReadSourceTypeProfile"] = "READ_SOURCE_TYPE_PROFILE";
    PeoplePeopleConnectionsListSourcesEnum["ReadSourceTypeContact"] = "READ_SOURCE_TYPE_CONTACT";
    PeoplePeopleConnectionsListSourcesEnum["ReadSourceTypeDomainContact"] = "READ_SOURCE_TYPE_DOMAIN_CONTACT";
})(PeoplePeopleConnectionsListSourcesEnum || (PeoplePeopleConnectionsListSourcesEnum = {}));
var PeoplePeopleConnectionsListQueryParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListQueryParams, _super);
    function PeoplePeopleConnectionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=personFields" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "personFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestMask.includeField" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "requestMaskIncludeField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestSyncToken" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "requestSyncToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=syncToken" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "syncToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListQueryParams.prototype, "uploadProtocol", void 0);
    return PeoplePeopleConnectionsListQueryParams;
}(SpeakeasyBase));
export { PeoplePeopleConnectionsListQueryParams };
var PeoplePeopleConnectionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListSecurityOption1, _super);
    function PeoplePeopleConnectionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleConnectionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleConnectionsListSecurityOption1.prototype, "oauth2c", void 0);
    return PeoplePeopleConnectionsListSecurityOption1;
}(SpeakeasyBase));
export { PeoplePeopleConnectionsListSecurityOption1 };
var PeoplePeopleConnectionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListSecurityOption2, _super);
    function PeoplePeopleConnectionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleConnectionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleConnectionsListSecurityOption2.prototype, "oauth2c", void 0);
    return PeoplePeopleConnectionsListSecurityOption2;
}(SpeakeasyBase));
export { PeoplePeopleConnectionsListSecurityOption2 };
var PeoplePeopleConnectionsListSecurity = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListSecurity, _super);
    function PeoplePeopleConnectionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleConnectionsListSecurityOption1)
    ], PeoplePeopleConnectionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleConnectionsListSecurityOption2)
    ], PeoplePeopleConnectionsListSecurity.prototype, "option2", void 0);
    return PeoplePeopleConnectionsListSecurity;
}(SpeakeasyBase));
export { PeoplePeopleConnectionsListSecurity };
var PeoplePeopleConnectionsListRequest = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListRequest, _super);
    function PeoplePeopleConnectionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleConnectionsListPathParams)
    ], PeoplePeopleConnectionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleConnectionsListQueryParams)
    ], PeoplePeopleConnectionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleConnectionsListSecurity)
    ], PeoplePeopleConnectionsListRequest.prototype, "security", void 0);
    return PeoplePeopleConnectionsListRequest;
}(SpeakeasyBase));
export { PeoplePeopleConnectionsListRequest };
var PeoplePeopleConnectionsListResponse = /** @class */ (function (_super) {
    __extends(PeoplePeopleConnectionsListResponse, _super);
    function PeoplePeopleConnectionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PeoplePeopleConnectionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListConnectionsResponse)
    ], PeoplePeopleConnectionsListResponse.prototype, "listConnectionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PeoplePeopleConnectionsListResponse.prototype, "statusCode", void 0);
    return PeoplePeopleConnectionsListResponse;
}(SpeakeasyBase));
export { PeoplePeopleConnectionsListResponse };
