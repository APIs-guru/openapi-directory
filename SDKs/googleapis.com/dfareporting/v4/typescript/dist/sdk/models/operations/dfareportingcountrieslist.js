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
var DfareportingCountriesListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingCountriesListPathParams, _super);
    function DfareportingCountriesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingCountriesListPathParams.prototype, "profileId", void 0);
    return DfareportingCountriesListPathParams;
}(SpeakeasyBase));
export { DfareportingCountriesListPathParams };
var DfareportingCountriesListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingCountriesListQueryParams, _super);
    function DfareportingCountriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingCountriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingCountriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingCountriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingCountriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingCountriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingCountriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingCountriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingCountriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingCountriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingCountriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingCountriesListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingCountriesListQueryParams;
}(SpeakeasyBase));
export { DfareportingCountriesListQueryParams };
var DfareportingCountriesListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingCountriesListSecurity, _super);
    function DfareportingCountriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingCountriesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingCountriesListSecurity.prototype, "oauth2c", void 0);
    return DfareportingCountriesListSecurity;
}(SpeakeasyBase));
export { DfareportingCountriesListSecurity };
var DfareportingCountriesListRequest = /** @class */ (function (_super) {
    __extends(DfareportingCountriesListRequest, _super);
    function DfareportingCountriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCountriesListPathParams)
    ], DfareportingCountriesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCountriesListQueryParams)
    ], DfareportingCountriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCountriesListSecurity)
    ], DfareportingCountriesListRequest.prototype, "security", void 0);
    return DfareportingCountriesListRequest;
}(SpeakeasyBase));
export { DfareportingCountriesListRequest };
var DfareportingCountriesListResponse = /** @class */ (function (_super) {
    __extends(DfareportingCountriesListResponse, _super);
    function DfareportingCountriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingCountriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CountriesListResponse)
    ], DfareportingCountriesListResponse.prototype, "countriesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingCountriesListResponse.prototype, "statusCode", void 0);
    return DfareportingCountriesListResponse;
}(SpeakeasyBase));
export { DfareportingCountriesListResponse };
