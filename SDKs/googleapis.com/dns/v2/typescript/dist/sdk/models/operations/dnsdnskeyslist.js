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
var DnsDnsKeysListPathParams = /** @class */ (function (_super) {
    __extends(DnsDnsKeysListPathParams, _super);
    function DnsDnsKeysListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedZone" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListPathParams.prototype, "managedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListPathParams.prototype, "project", void 0);
    return DnsDnsKeysListPathParams;
}(SpeakeasyBase));
export { DnsDnsKeysListPathParams };
var DnsDnsKeysListQueryParams = /** @class */ (function (_super) {
    __extends(DnsDnsKeysListQueryParams, _super);
    function DnsDnsKeysListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=digestType" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "digestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DnsDnsKeysListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsDnsKeysListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsDnsKeysListQueryParams.prototype, "uploadProtocol", void 0);
    return DnsDnsKeysListQueryParams;
}(SpeakeasyBase));
export { DnsDnsKeysListQueryParams };
var DnsDnsKeysListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsDnsKeysListSecurityOption1, _super);
    function DnsDnsKeysListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsDnsKeysListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsDnsKeysListSecurityOption1.prototype, "oauth2c", void 0);
    return DnsDnsKeysListSecurityOption1;
}(SpeakeasyBase));
export { DnsDnsKeysListSecurityOption1 };
var DnsDnsKeysListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsDnsKeysListSecurityOption2, _super);
    function DnsDnsKeysListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsDnsKeysListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsDnsKeysListSecurityOption2.prototype, "oauth2c", void 0);
    return DnsDnsKeysListSecurityOption2;
}(SpeakeasyBase));
export { DnsDnsKeysListSecurityOption2 };
var DnsDnsKeysListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsDnsKeysListSecurityOption3, _super);
    function DnsDnsKeysListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsDnsKeysListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsDnsKeysListSecurityOption3.prototype, "oauth2c", void 0);
    return DnsDnsKeysListSecurityOption3;
}(SpeakeasyBase));
export { DnsDnsKeysListSecurityOption3 };
var DnsDnsKeysListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsDnsKeysListSecurityOption4, _super);
    function DnsDnsKeysListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsDnsKeysListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsDnsKeysListSecurityOption4.prototype, "oauth2c", void 0);
    return DnsDnsKeysListSecurityOption4;
}(SpeakeasyBase));
export { DnsDnsKeysListSecurityOption4 };
var DnsDnsKeysListSecurity = /** @class */ (function (_super) {
    __extends(DnsDnsKeysListSecurity, _super);
    function DnsDnsKeysListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsDnsKeysListSecurityOption1)
    ], DnsDnsKeysListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsDnsKeysListSecurityOption2)
    ], DnsDnsKeysListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsDnsKeysListSecurityOption3)
    ], DnsDnsKeysListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsDnsKeysListSecurityOption4)
    ], DnsDnsKeysListSecurity.prototype, "option4", void 0);
    return DnsDnsKeysListSecurity;
}(SpeakeasyBase));
export { DnsDnsKeysListSecurity };
var DnsDnsKeysListRequest = /** @class */ (function (_super) {
    __extends(DnsDnsKeysListRequest, _super);
    function DnsDnsKeysListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsDnsKeysListPathParams)
    ], DnsDnsKeysListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsDnsKeysListQueryParams)
    ], DnsDnsKeysListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsDnsKeysListSecurity)
    ], DnsDnsKeysListRequest.prototype, "security", void 0);
    return DnsDnsKeysListRequest;
}(SpeakeasyBase));
export { DnsDnsKeysListRequest };
var DnsDnsKeysListResponse = /** @class */ (function (_super) {
    __extends(DnsDnsKeysListResponse, _super);
    function DnsDnsKeysListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsDnsKeysListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DnsKeysListResponse)
    ], DnsDnsKeysListResponse.prototype, "dnsKeysListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsDnsKeysListResponse.prototype, "statusCode", void 0);
    return DnsDnsKeysListResponse;
}(SpeakeasyBase));
export { DnsDnsKeysListResponse };
