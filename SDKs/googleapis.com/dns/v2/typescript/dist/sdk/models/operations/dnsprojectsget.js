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
var DnsProjectsGetPathParams = /** @class */ (function (_super) {
    __extends(DnsProjectsGetPathParams, _super);
    function DnsProjectsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DnsProjectsGetPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsProjectsGetPathParams.prototype, "project", void 0);
    return DnsProjectsGetPathParams;
}(SpeakeasyBase));
export { DnsProjectsGetPathParams };
var DnsProjectsGetQueryParams = /** @class */ (function (_super) {
    __extends(DnsProjectsGetQueryParams, _super);
    function DnsProjectsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsProjectsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsProjectsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsProjectsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsProjectsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsProjectsGetQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsProjectsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsProjectsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsProjectsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsProjectsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsProjectsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsProjectsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsProjectsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DnsProjectsGetQueryParams;
}(SpeakeasyBase));
export { DnsProjectsGetQueryParams };
var DnsProjectsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsProjectsGetSecurityOption1, _super);
    function DnsProjectsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsProjectsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsProjectsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DnsProjectsGetSecurityOption1;
}(SpeakeasyBase));
export { DnsProjectsGetSecurityOption1 };
var DnsProjectsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsProjectsGetSecurityOption2, _super);
    function DnsProjectsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsProjectsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsProjectsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DnsProjectsGetSecurityOption2;
}(SpeakeasyBase));
export { DnsProjectsGetSecurityOption2 };
var DnsProjectsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsProjectsGetSecurityOption3, _super);
    function DnsProjectsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsProjectsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsProjectsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DnsProjectsGetSecurityOption3;
}(SpeakeasyBase));
export { DnsProjectsGetSecurityOption3 };
var DnsProjectsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsProjectsGetSecurityOption4, _super);
    function DnsProjectsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsProjectsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsProjectsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DnsProjectsGetSecurityOption4;
}(SpeakeasyBase));
export { DnsProjectsGetSecurityOption4 };
var DnsProjectsGetSecurity = /** @class */ (function (_super) {
    __extends(DnsProjectsGetSecurity, _super);
    function DnsProjectsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsProjectsGetSecurityOption1)
    ], DnsProjectsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsProjectsGetSecurityOption2)
    ], DnsProjectsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsProjectsGetSecurityOption3)
    ], DnsProjectsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsProjectsGetSecurityOption4)
    ], DnsProjectsGetSecurity.prototype, "option4", void 0);
    return DnsProjectsGetSecurity;
}(SpeakeasyBase));
export { DnsProjectsGetSecurity };
var DnsProjectsGetRequest = /** @class */ (function (_super) {
    __extends(DnsProjectsGetRequest, _super);
    function DnsProjectsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsProjectsGetPathParams)
    ], DnsProjectsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsProjectsGetQueryParams)
    ], DnsProjectsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsProjectsGetSecurity)
    ], DnsProjectsGetRequest.prototype, "security", void 0);
    return DnsProjectsGetRequest;
}(SpeakeasyBase));
export { DnsProjectsGetRequest };
var DnsProjectsGetResponse = /** @class */ (function (_super) {
    __extends(DnsProjectsGetResponse, _super);
    function DnsProjectsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsProjectsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Project)
    ], DnsProjectsGetResponse.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsProjectsGetResponse.prototype, "statusCode", void 0);
    return DnsProjectsGetResponse;
}(SpeakeasyBase));
export { DnsProjectsGetResponse };
