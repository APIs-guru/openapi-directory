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
var GmailpostmastertoolsDomainsTrafficStatsGetPathParams = /** @class */ (function (_super) {
    __extends(GmailpostmastertoolsDomainsTrafficStatsGetPathParams, _super);
    function GmailpostmastertoolsDomainsTrafficStatsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetPathParams.prototype, "name", void 0);
    return GmailpostmastertoolsDomainsTrafficStatsGetPathParams;
}(SpeakeasyBase));
export { GmailpostmastertoolsDomainsTrafficStatsGetPathParams };
var GmailpostmastertoolsDomainsTrafficStatsGetQueryParams = /** @class */ (function (_super) {
    __extends(GmailpostmastertoolsDomainsTrafficStatsGetQueryParams, _super);
    function GmailpostmastertoolsDomainsTrafficStatsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailpostmastertoolsDomainsTrafficStatsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetQueryParams.prototype, "uploadProtocol", void 0);
    return GmailpostmastertoolsDomainsTrafficStatsGetQueryParams;
}(SpeakeasyBase));
export { GmailpostmastertoolsDomainsTrafficStatsGetQueryParams };
var GmailpostmastertoolsDomainsTrafficStatsGetSecurity = /** @class */ (function (_super) {
    __extends(GmailpostmastertoolsDomainsTrafficStatsGetSecurity, _super);
    function GmailpostmastertoolsDomainsTrafficStatsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailpostmastertoolsDomainsTrafficStatsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailpostmastertoolsDomainsTrafficStatsGetSecurity.prototype, "oauth2c", void 0);
    return GmailpostmastertoolsDomainsTrafficStatsGetSecurity;
}(SpeakeasyBase));
export { GmailpostmastertoolsDomainsTrafficStatsGetSecurity };
var GmailpostmastertoolsDomainsTrafficStatsGetRequest = /** @class */ (function (_super) {
    __extends(GmailpostmastertoolsDomainsTrafficStatsGetRequest, _super);
    function GmailpostmastertoolsDomainsTrafficStatsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailpostmastertoolsDomainsTrafficStatsGetPathParams)
    ], GmailpostmastertoolsDomainsTrafficStatsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailpostmastertoolsDomainsTrafficStatsGetQueryParams)
    ], GmailpostmastertoolsDomainsTrafficStatsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailpostmastertoolsDomainsTrafficStatsGetSecurity)
    ], GmailpostmastertoolsDomainsTrafficStatsGetRequest.prototype, "security", void 0);
    return GmailpostmastertoolsDomainsTrafficStatsGetRequest;
}(SpeakeasyBase));
export { GmailpostmastertoolsDomainsTrafficStatsGetRequest };
var GmailpostmastertoolsDomainsTrafficStatsGetResponse = /** @class */ (function (_super) {
    __extends(GmailpostmastertoolsDomainsTrafficStatsGetResponse, _super);
    function GmailpostmastertoolsDomainsTrafficStatsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailpostmastertoolsDomainsTrafficStatsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailpostmastertoolsDomainsTrafficStatsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrafficStats)
    ], GmailpostmastertoolsDomainsTrafficStatsGetResponse.prototype, "trafficStats", void 0);
    return GmailpostmastertoolsDomainsTrafficStatsGetResponse;
}(SpeakeasyBase));
export { GmailpostmastertoolsDomainsTrafficStatsGetResponse };
