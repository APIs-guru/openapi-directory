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
var DnsChangesGetPathParams = /** @class */ (function (_super) {
    __extends(DnsChangesGetPathParams, _super);
    function DnsChangesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeId" }),
        __metadata("design:type", String)
    ], DnsChangesGetPathParams.prototype, "changeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DnsChangesGetPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedZone" }),
        __metadata("design:type", String)
    ], DnsChangesGetPathParams.prototype, "managedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsChangesGetPathParams.prototype, "project", void 0);
    return DnsChangesGetPathParams;
}(SpeakeasyBase));
export { DnsChangesGetPathParams };
var DnsChangesGetQueryParams = /** @class */ (function (_super) {
    __extends(DnsChangesGetQueryParams, _super);
    function DnsChangesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsChangesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsChangesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsChangesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsChangesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsChangesGetQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsChangesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsChangesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsChangesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsChangesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsChangesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsChangesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsChangesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DnsChangesGetQueryParams;
}(SpeakeasyBase));
export { DnsChangesGetQueryParams };
var DnsChangesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsChangesGetSecurityOption1, _super);
    function DnsChangesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsChangesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsChangesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DnsChangesGetSecurityOption1;
}(SpeakeasyBase));
export { DnsChangesGetSecurityOption1 };
var DnsChangesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsChangesGetSecurityOption2, _super);
    function DnsChangesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsChangesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsChangesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DnsChangesGetSecurityOption2;
}(SpeakeasyBase));
export { DnsChangesGetSecurityOption2 };
var DnsChangesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsChangesGetSecurityOption3, _super);
    function DnsChangesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsChangesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsChangesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DnsChangesGetSecurityOption3;
}(SpeakeasyBase));
export { DnsChangesGetSecurityOption3 };
var DnsChangesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsChangesGetSecurityOption4, _super);
    function DnsChangesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsChangesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsChangesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DnsChangesGetSecurityOption4;
}(SpeakeasyBase));
export { DnsChangesGetSecurityOption4 };
var DnsChangesGetSecurity = /** @class */ (function (_super) {
    __extends(DnsChangesGetSecurity, _super);
    function DnsChangesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsChangesGetSecurityOption1)
    ], DnsChangesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsChangesGetSecurityOption2)
    ], DnsChangesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsChangesGetSecurityOption3)
    ], DnsChangesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsChangesGetSecurityOption4)
    ], DnsChangesGetSecurity.prototype, "option4", void 0);
    return DnsChangesGetSecurity;
}(SpeakeasyBase));
export { DnsChangesGetSecurity };
var DnsChangesGetRequest = /** @class */ (function (_super) {
    __extends(DnsChangesGetRequest, _super);
    function DnsChangesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsChangesGetPathParams)
    ], DnsChangesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsChangesGetQueryParams)
    ], DnsChangesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsChangesGetSecurity)
    ], DnsChangesGetRequest.prototype, "security", void 0);
    return DnsChangesGetRequest;
}(SpeakeasyBase));
export { DnsChangesGetRequest };
var DnsChangesGetResponse = /** @class */ (function (_super) {
    __extends(DnsChangesGetResponse, _super);
    function DnsChangesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Change)
    ], DnsChangesGetResponse.prototype, "change", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsChangesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsChangesGetResponse.prototype, "statusCode", void 0);
    return DnsChangesGetResponse;
}(SpeakeasyBase));
export { DnsChangesGetResponse };
