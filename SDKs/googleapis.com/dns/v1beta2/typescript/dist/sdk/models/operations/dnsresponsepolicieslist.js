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
var DnsResponsePoliciesListPathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesListPathParams, _super);
    function DnsResponsePoliciesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListPathParams.prototype, "project", void 0);
    return DnsResponsePoliciesListPathParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesListPathParams };
var DnsResponsePoliciesListQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesListQueryParams, _super);
    function DnsResponsePoliciesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DnsResponsePoliciesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePoliciesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePoliciesListQueryParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesListQueryParams };
var DnsResponsePoliciesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesListSecurityOption1, _super);
    function DnsResponsePoliciesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesListSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesListSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePoliciesListSecurityOption1 };
var DnsResponsePoliciesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesListSecurityOption2, _super);
    function DnsResponsePoliciesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesListSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesListSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePoliciesListSecurityOption2 };
var DnsResponsePoliciesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesListSecurityOption3, _super);
    function DnsResponsePoliciesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesListSecurityOption3.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesListSecurityOption3;
}(SpeakeasyBase));
export { DnsResponsePoliciesListSecurityOption3 };
var DnsResponsePoliciesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesListSecurityOption4, _super);
    function DnsResponsePoliciesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesListSecurityOption4.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesListSecurityOption4;
}(SpeakeasyBase));
export { DnsResponsePoliciesListSecurityOption4 };
var DnsResponsePoliciesListSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesListSecurity, _super);
    function DnsResponsePoliciesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesListSecurityOption1)
    ], DnsResponsePoliciesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesListSecurityOption2)
    ], DnsResponsePoliciesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesListSecurityOption3)
    ], DnsResponsePoliciesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesListSecurityOption4)
    ], DnsResponsePoliciesListSecurity.prototype, "option4", void 0);
    return DnsResponsePoliciesListSecurity;
}(SpeakeasyBase));
export { DnsResponsePoliciesListSecurity };
var DnsResponsePoliciesListRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesListRequest, _super);
    function DnsResponsePoliciesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesListPathParams)
    ], DnsResponsePoliciesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesListQueryParams)
    ], DnsResponsePoliciesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesListSecurity)
    ], DnsResponsePoliciesListRequest.prototype, "security", void 0);
    return DnsResponsePoliciesListRequest;
}(SpeakeasyBase));
export { DnsResponsePoliciesListRequest };
var DnsResponsePoliciesListResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesListResponse, _super);
    function DnsResponsePoliciesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePoliciesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResponsePoliciesListResponse)
    ], DnsResponsePoliciesListResponse.prototype, "responsePoliciesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePoliciesListResponse.prototype, "statusCode", void 0);
    return DnsResponsePoliciesListResponse;
}(SpeakeasyBase));
export { DnsResponsePoliciesListResponse };
