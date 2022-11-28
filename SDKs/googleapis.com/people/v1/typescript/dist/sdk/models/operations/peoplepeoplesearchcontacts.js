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
export var PeoplePeopleSearchContactsSourcesEnum;
(function (PeoplePeopleSearchContactsSourcesEnum) {
    PeoplePeopleSearchContactsSourcesEnum["ReadSourceTypeUnspecified"] = "READ_SOURCE_TYPE_UNSPECIFIED";
    PeoplePeopleSearchContactsSourcesEnum["ReadSourceTypeProfile"] = "READ_SOURCE_TYPE_PROFILE";
    PeoplePeopleSearchContactsSourcesEnum["ReadSourceTypeContact"] = "READ_SOURCE_TYPE_CONTACT";
    PeoplePeopleSearchContactsSourcesEnum["ReadSourceTypeDomainContact"] = "READ_SOURCE_TYPE_DOMAIN_CONTACT";
})(PeoplePeopleSearchContactsSourcesEnum || (PeoplePeopleSearchContactsSourcesEnum = {}));
var PeoplePeopleSearchContactsQueryParams = /** @class */ (function (_super) {
    __extends(PeoplePeopleSearchContactsQueryParams, _super);
    function PeoplePeopleSearchContactsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sources" }),
        __metadata("design:type", Array)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsQueryParams.prototype, "uploadProtocol", void 0);
    return PeoplePeopleSearchContactsQueryParams;
}(SpeakeasyBase));
export { PeoplePeopleSearchContactsQueryParams };
var PeoplePeopleSearchContactsSecurityOption1 = /** @class */ (function (_super) {
    __extends(PeoplePeopleSearchContactsSecurityOption1, _super);
    function PeoplePeopleSearchContactsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleSearchContactsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleSearchContactsSecurityOption1.prototype, "oauth2c", void 0);
    return PeoplePeopleSearchContactsSecurityOption1;
}(SpeakeasyBase));
export { PeoplePeopleSearchContactsSecurityOption1 };
var PeoplePeopleSearchContactsSecurityOption2 = /** @class */ (function (_super) {
    __extends(PeoplePeopleSearchContactsSecurityOption2, _super);
    function PeoplePeopleSearchContactsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PeoplePeopleSearchContactsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PeoplePeopleSearchContactsSecurityOption2.prototype, "oauth2c", void 0);
    return PeoplePeopleSearchContactsSecurityOption2;
}(SpeakeasyBase));
export { PeoplePeopleSearchContactsSecurityOption2 };
var PeoplePeopleSearchContactsSecurity = /** @class */ (function (_super) {
    __extends(PeoplePeopleSearchContactsSecurity, _super);
    function PeoplePeopleSearchContactsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleSearchContactsSecurityOption1)
    ], PeoplePeopleSearchContactsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PeoplePeopleSearchContactsSecurityOption2)
    ], PeoplePeopleSearchContactsSecurity.prototype, "option2", void 0);
    return PeoplePeopleSearchContactsSecurity;
}(SpeakeasyBase));
export { PeoplePeopleSearchContactsSecurity };
var PeoplePeopleSearchContactsRequest = /** @class */ (function (_super) {
    __extends(PeoplePeopleSearchContactsRequest, _super);
    function PeoplePeopleSearchContactsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleSearchContactsQueryParams)
    ], PeoplePeopleSearchContactsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PeoplePeopleSearchContactsSecurity)
    ], PeoplePeopleSearchContactsRequest.prototype, "security", void 0);
    return PeoplePeopleSearchContactsRequest;
}(SpeakeasyBase));
export { PeoplePeopleSearchContactsRequest };
var PeoplePeopleSearchContactsResponse = /** @class */ (function (_super) {
    __extends(PeoplePeopleSearchContactsResponse, _super);
    function PeoplePeopleSearchContactsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PeoplePeopleSearchContactsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchResponse)
    ], PeoplePeopleSearchContactsResponse.prototype, "searchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PeoplePeopleSearchContactsResponse.prototype, "statusCode", void 0);
    return PeoplePeopleSearchContactsResponse;
}(SpeakeasyBase));
export { PeoplePeopleSearchContactsResponse };
