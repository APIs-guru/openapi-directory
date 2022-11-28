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
var DnsResponsePolicyRulesListPathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesListPathParams, _super);
    function DnsResponsePolicyRulesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicy" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListPathParams.prototype, "responsePolicy", void 0);
    return DnsResponsePolicyRulesListPathParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesListPathParams };
var DnsResponsePolicyRulesListQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesListQueryParams, _super);
    function DnsResponsePolicyRulesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePolicyRulesListQueryParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesListQueryParams };
var DnsResponsePolicyRulesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesListSecurityOption1, _super);
    function DnsResponsePolicyRulesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesListSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesListSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesListSecurityOption1 };
var DnsResponsePolicyRulesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesListSecurityOption2, _super);
    function DnsResponsePolicyRulesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesListSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesListSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesListSecurityOption2 };
var DnsResponsePolicyRulesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesListSecurityOption3, _super);
    function DnsResponsePolicyRulesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesListSecurityOption3.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesListSecurityOption3;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesListSecurityOption3 };
var DnsResponsePolicyRulesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesListSecurityOption4, _super);
    function DnsResponsePolicyRulesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesListSecurityOption4.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesListSecurityOption4;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesListSecurityOption4 };
var DnsResponsePolicyRulesListSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesListSecurity, _super);
    function DnsResponsePolicyRulesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesListSecurityOption1)
    ], DnsResponsePolicyRulesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesListSecurityOption2)
    ], DnsResponsePolicyRulesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesListSecurityOption3)
    ], DnsResponsePolicyRulesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesListSecurityOption4)
    ], DnsResponsePolicyRulesListSecurity.prototype, "option4", void 0);
    return DnsResponsePolicyRulesListSecurity;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesListSecurity };
var DnsResponsePolicyRulesListRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesListRequest, _super);
    function DnsResponsePolicyRulesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesListPathParams)
    ], DnsResponsePolicyRulesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesListQueryParams)
    ], DnsResponsePolicyRulesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesListSecurity)
    ], DnsResponsePolicyRulesListRequest.prototype, "security", void 0);
    return DnsResponsePolicyRulesListRequest;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesListRequest };
var DnsResponsePolicyRulesListResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesListResponse, _super);
    function DnsResponsePolicyRulesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResponsePolicyRulesListResponse)
    ], DnsResponsePolicyRulesListResponse.prototype, "responsePolicyRulesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePolicyRulesListResponse.prototype, "statusCode", void 0);
    return DnsResponsePolicyRulesListResponse;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesListResponse };
