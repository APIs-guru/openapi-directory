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
var DoubleclicksearchConversionGetPathParams = /** @class */ (function (_super) {
    __extends(DoubleclicksearchConversionGetPathParams, _super);
    function DoubleclicksearchConversionGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agencyId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetPathParams.prototype, "agencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=engineAccountId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetPathParams.prototype, "engineAccountId", void 0);
    return DoubleclicksearchConversionGetPathParams;
}(SpeakeasyBase));
export { DoubleclicksearchConversionGetPathParams };
var DoubleclicksearchConversionGetQueryParams = /** @class */ (function (_super) {
    __extends(DoubleclicksearchConversionGetQueryParams, _super);
    function DoubleclicksearchConversionGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adGroupId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "adGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "adId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criterionId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "criterionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Number)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rowCount" }),
        __metadata("design:type", Number)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "rowCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Number)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startRow" }),
        __metadata("design:type", Number)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "startRow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetQueryParams.prototype, "uploadProtocol", void 0);
    return DoubleclicksearchConversionGetQueryParams;
}(SpeakeasyBase));
export { DoubleclicksearchConversionGetQueryParams };
var DoubleclicksearchConversionGetSecurity = /** @class */ (function (_super) {
    __extends(DoubleclicksearchConversionGetSecurity, _super);
    function DoubleclicksearchConversionGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DoubleclicksearchConversionGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DoubleclicksearchConversionGetSecurity.prototype, "oauth2c", void 0);
    return DoubleclicksearchConversionGetSecurity;
}(SpeakeasyBase));
export { DoubleclicksearchConversionGetSecurity };
var DoubleclicksearchConversionGetRequest = /** @class */ (function (_super) {
    __extends(DoubleclicksearchConversionGetRequest, _super);
    function DoubleclicksearchConversionGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchConversionGetPathParams)
    ], DoubleclicksearchConversionGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchConversionGetQueryParams)
    ], DoubleclicksearchConversionGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclicksearchConversionGetSecurity)
    ], DoubleclicksearchConversionGetRequest.prototype, "security", void 0);
    return DoubleclicksearchConversionGetRequest;
}(SpeakeasyBase));
export { DoubleclicksearchConversionGetRequest };
var DoubleclicksearchConversionGetResponse = /** @class */ (function (_super) {
    __extends(DoubleclicksearchConversionGetResponse, _super);
    function DoubleclicksearchConversionGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DoubleclicksearchConversionGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversionList)
    ], DoubleclicksearchConversionGetResponse.prototype, "conversionList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DoubleclicksearchConversionGetResponse.prototype, "statusCode", void 0);
    return DoubleclicksearchConversionGetResponse;
}(SpeakeasyBase));
export { DoubleclicksearchConversionGetResponse };
