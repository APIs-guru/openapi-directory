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
var DnsResourceRecordSetsGetPathParams = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsGetPathParams, _super);
    function DnsResourceRecordSetsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedZone" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetPathParams.prototype, "managedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetPathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetPathParams.prototype, "type", void 0);
    return DnsResourceRecordSetsGetPathParams;
}(SpeakeasyBase));
export { DnsResourceRecordSetsGetPathParams };
var DnsResourceRecordSetsGetQueryParams = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsGetQueryParams, _super);
    function DnsResourceRecordSetsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResourceRecordSetsGetQueryParams;
}(SpeakeasyBase));
export { DnsResourceRecordSetsGetQueryParams };
var DnsResourceRecordSetsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsGetSecurityOption1, _super);
    function DnsResourceRecordSetsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsGetSecurityOption1;
}(SpeakeasyBase));
export { DnsResourceRecordSetsGetSecurityOption1 };
var DnsResourceRecordSetsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsGetSecurityOption2, _super);
    function DnsResourceRecordSetsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsGetSecurityOption2;
}(SpeakeasyBase));
export { DnsResourceRecordSetsGetSecurityOption2 };
var DnsResourceRecordSetsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsGetSecurityOption3, _super);
    function DnsResourceRecordSetsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsGetSecurityOption3;
}(SpeakeasyBase));
export { DnsResourceRecordSetsGetSecurityOption3 };
var DnsResourceRecordSetsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsGetSecurityOption4, _super);
    function DnsResourceRecordSetsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsGetSecurityOption4;
}(SpeakeasyBase));
export { DnsResourceRecordSetsGetSecurityOption4 };
var DnsResourceRecordSetsGetSecurity = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsGetSecurity, _super);
    function DnsResourceRecordSetsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsGetSecurityOption1)
    ], DnsResourceRecordSetsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsGetSecurityOption2)
    ], DnsResourceRecordSetsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsGetSecurityOption3)
    ], DnsResourceRecordSetsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsGetSecurityOption4)
    ], DnsResourceRecordSetsGetSecurity.prototype, "option4", void 0);
    return DnsResourceRecordSetsGetSecurity;
}(SpeakeasyBase));
export { DnsResourceRecordSetsGetSecurity };
var DnsResourceRecordSetsGetRequest = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsGetRequest, _super);
    function DnsResourceRecordSetsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsGetPathParams)
    ], DnsResourceRecordSetsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsGetQueryParams)
    ], DnsResourceRecordSetsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsGetSecurity)
    ], DnsResourceRecordSetsGetRequest.prototype, "security", void 0);
    return DnsResourceRecordSetsGetRequest;
}(SpeakeasyBase));
export { DnsResourceRecordSetsGetRequest };
var DnsResourceRecordSetsGetResponse = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsGetResponse, _super);
    function DnsResourceRecordSetsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceRecordSet)
    ], DnsResourceRecordSetsGetResponse.prototype, "resourceRecordSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResourceRecordSetsGetResponse.prototype, "statusCode", void 0);
    return DnsResourceRecordSetsGetResponse;
}(SpeakeasyBase));
export { DnsResourceRecordSetsGetResponse };
