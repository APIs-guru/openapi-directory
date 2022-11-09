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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var CloudidentityGroupsSearchViewEnum;
(function (CloudidentityGroupsSearchViewEnum) {
    CloudidentityGroupsSearchViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    CloudidentityGroupsSearchViewEnum["Basic"] = "BASIC";
    CloudidentityGroupsSearchViewEnum["Full"] = "FULL";
})(CloudidentityGroupsSearchViewEnum || (CloudidentityGroupsSearchViewEnum = {}));
var CloudidentityGroupsSearchQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchQueryParams, _super);
    function CloudidentityGroupsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudidentityGroupsSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchQueryParams.prototype, "view", void 0);
    return CloudidentityGroupsSearchQueryParams;
}(SpeakeasyBase));
export { CloudidentityGroupsSearchQueryParams };
var CloudidentityGroupsSearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchSecurityOption1, _super);
    function CloudidentityGroupsSearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsSearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsSearchSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsSearchSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityGroupsSearchSecurityOption1 };
var CloudidentityGroupsSearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchSecurityOption2, _super);
    function CloudidentityGroupsSearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsSearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsSearchSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsSearchSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityGroupsSearchSecurityOption2 };
var CloudidentityGroupsSearchSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchSecurityOption3, _super);
    function CloudidentityGroupsSearchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsSearchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsSearchSecurityOption3.prototype, "oauth2c", void 0);
    return CloudidentityGroupsSearchSecurityOption3;
}(SpeakeasyBase));
export { CloudidentityGroupsSearchSecurityOption3 };
var CloudidentityGroupsSearchSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchSecurity, _super);
    function CloudidentityGroupsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsSearchSecurityOption1)
    ], CloudidentityGroupsSearchSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsSearchSecurityOption2)
    ], CloudidentityGroupsSearchSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsSearchSecurityOption3)
    ], CloudidentityGroupsSearchSecurity.prototype, "option3", void 0);
    return CloudidentityGroupsSearchSecurity;
}(SpeakeasyBase));
export { CloudidentityGroupsSearchSecurity };
var CloudidentityGroupsSearchRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchRequest, _super);
    function CloudidentityGroupsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsSearchQueryParams)
    ], CloudidentityGroupsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsSearchSecurity)
    ], CloudidentityGroupsSearchRequest.prototype, "security", void 0);
    return CloudidentityGroupsSearchRequest;
}(SpeakeasyBase));
export { CloudidentityGroupsSearchRequest };
var CloudidentityGroupsSearchResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsSearchResponse, _super);
    function CloudidentityGroupsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudidentityGroupsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SearchGroupsResponse)
    ], CloudidentityGroupsSearchResponse.prototype, "searchGroupsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsSearchResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsSearchResponse;
}(SpeakeasyBase));
export { CloudidentityGroupsSearchResponse };
