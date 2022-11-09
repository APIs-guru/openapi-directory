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
var PlusPeopleSearchQueryParams = /** @class */ (function (_super) {
    __extends(PlusPeopleSearchQueryParams, _super);
    function PlusPeopleSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlusPeopleSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlusPeopleSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlusPeopleSearchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], PlusPeopleSearchQueryParams.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], PlusPeopleSearchQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlusPeopleSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PlusPeopleSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlusPeopleSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], PlusPeopleSearchQueryParams.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlusPeopleSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], PlusPeopleSearchQueryParams.prototype, "userIp", void 0);
    return PlusPeopleSearchQueryParams;
}(SpeakeasyBase));
export { PlusPeopleSearchQueryParams };
var PlusPeopleSearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(PlusPeopleSearchSecurityOption1, _super);
    function PlusPeopleSearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusPeopleSearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusPeopleSearchSecurityOption1.prototype, "oauth2c", void 0);
    return PlusPeopleSearchSecurityOption1;
}(SpeakeasyBase));
export { PlusPeopleSearchSecurityOption1 };
var PlusPeopleSearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(PlusPeopleSearchSecurityOption2, _super);
    function PlusPeopleSearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusPeopleSearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusPeopleSearchSecurityOption2.prototype, "oauth2c", void 0);
    return PlusPeopleSearchSecurityOption2;
}(SpeakeasyBase));
export { PlusPeopleSearchSecurityOption2 };
var PlusPeopleSearchSecurity = /** @class */ (function (_super) {
    __extends(PlusPeopleSearchSecurity, _super);
    function PlusPeopleSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PlusPeopleSearchSecurityOption1)
    ], PlusPeopleSearchSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PlusPeopleSearchSecurityOption2)
    ], PlusPeopleSearchSecurity.prototype, "option2", void 0);
    return PlusPeopleSearchSecurity;
}(SpeakeasyBase));
export { PlusPeopleSearchSecurity };
var PlusPeopleSearchRequest = /** @class */ (function (_super) {
    __extends(PlusPeopleSearchRequest, _super);
    function PlusPeopleSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PlusPeopleSearchQueryParams)
    ], PlusPeopleSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PlusPeopleSearchSecurity)
    ], PlusPeopleSearchRequest.prototype, "security", void 0);
    return PlusPeopleSearchRequest;
}(SpeakeasyBase));
export { PlusPeopleSearchRequest };
var PlusPeopleSearchResponse = /** @class */ (function (_super) {
    __extends(PlusPeopleSearchResponse, _super);
    function PlusPeopleSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PlusPeopleSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PeopleFeed)
    ], PlusPeopleSearchResponse.prototype, "peopleFeed", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PlusPeopleSearchResponse.prototype, "statusCode", void 0);
    return PlusPeopleSearchResponse;
}(SpeakeasyBase));
export { PlusPeopleSearchResponse };
