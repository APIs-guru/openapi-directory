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
var DfareportingAccountActiveAdSummariesGetPathParams = /** @class */ (function (_super) {
    __extends(DfareportingAccountActiveAdSummariesGetPathParams, _super);
    function DfareportingAccountActiveAdSummariesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=summaryAccountId" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetPathParams.prototype, "summaryAccountId", void 0);
    return DfareportingAccountActiveAdSummariesGetPathParams;
}(SpeakeasyBase));
export { DfareportingAccountActiveAdSummariesGetPathParams };
var DfareportingAccountActiveAdSummariesGetQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAccountActiveAdSummariesGetQueryParams, _super);
    function DfareportingAccountActiveAdSummariesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAccountActiveAdSummariesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingAccountActiveAdSummariesGetQueryParams;
}(SpeakeasyBase));
export { DfareportingAccountActiveAdSummariesGetQueryParams };
var DfareportingAccountActiveAdSummariesGetSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAccountActiveAdSummariesGetSecurity, _super);
    function DfareportingAccountActiveAdSummariesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAccountActiveAdSummariesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAccountActiveAdSummariesGetSecurity.prototype, "oauth2c", void 0);
    return DfareportingAccountActiveAdSummariesGetSecurity;
}(SpeakeasyBase));
export { DfareportingAccountActiveAdSummariesGetSecurity };
var DfareportingAccountActiveAdSummariesGetRequest = /** @class */ (function (_super) {
    __extends(DfareportingAccountActiveAdSummariesGetRequest, _super);
    function DfareportingAccountActiveAdSummariesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountActiveAdSummariesGetPathParams)
    ], DfareportingAccountActiveAdSummariesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountActiveAdSummariesGetQueryParams)
    ], DfareportingAccountActiveAdSummariesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAccountActiveAdSummariesGetSecurity)
    ], DfareportingAccountActiveAdSummariesGetRequest.prototype, "security", void 0);
    return DfareportingAccountActiveAdSummariesGetRequest;
}(SpeakeasyBase));
export { DfareportingAccountActiveAdSummariesGetRequest };
var DfareportingAccountActiveAdSummariesGetResponse = /** @class */ (function (_super) {
    __extends(DfareportingAccountActiveAdSummariesGetResponse, _super);
    function DfareportingAccountActiveAdSummariesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountActiveAdSummary)
    ], DfareportingAccountActiveAdSummariesGetResponse.prototype, "accountActiveAdSummary", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAccountActiveAdSummariesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAccountActiveAdSummariesGetResponse.prototype, "statusCode", void 0);
    return DfareportingAccountActiveAdSummariesGetResponse;
}(SpeakeasyBase));
export { DfareportingAccountActiveAdSummariesGetResponse };
