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
var DfareportingConversionsBatchinsertPathParams = /** @class */ (function (_super) {
    __extends(DfareportingConversionsBatchinsertPathParams, _super);
    function DfareportingConversionsBatchinsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertPathParams.prototype, "profileId", void 0);
    return DfareportingConversionsBatchinsertPathParams;
}(SpeakeasyBase));
export { DfareportingConversionsBatchinsertPathParams };
var DfareportingConversionsBatchinsertQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingConversionsBatchinsertQueryParams, _super);
    function DfareportingConversionsBatchinsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingConversionsBatchinsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingConversionsBatchinsertQueryParams;
}(SpeakeasyBase));
export { DfareportingConversionsBatchinsertQueryParams };
var DfareportingConversionsBatchinsertSecurity = /** @class */ (function (_super) {
    __extends(DfareportingConversionsBatchinsertSecurity, _super);
    function DfareportingConversionsBatchinsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingConversionsBatchinsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingConversionsBatchinsertSecurity.prototype, "oauth2c", void 0);
    return DfareportingConversionsBatchinsertSecurity;
}(SpeakeasyBase));
export { DfareportingConversionsBatchinsertSecurity };
var DfareportingConversionsBatchinsertRequest = /** @class */ (function (_super) {
    __extends(DfareportingConversionsBatchinsertRequest, _super);
    function DfareportingConversionsBatchinsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingConversionsBatchinsertPathParams)
    ], DfareportingConversionsBatchinsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingConversionsBatchinsertQueryParams)
    ], DfareportingConversionsBatchinsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConversionsBatchInsertRequest)
    ], DfareportingConversionsBatchinsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingConversionsBatchinsertSecurity)
    ], DfareportingConversionsBatchinsertRequest.prototype, "security", void 0);
    return DfareportingConversionsBatchinsertRequest;
}(SpeakeasyBase));
export { DfareportingConversionsBatchinsertRequest };
var DfareportingConversionsBatchinsertResponse = /** @class */ (function (_super) {
    __extends(DfareportingConversionsBatchinsertResponse, _super);
    function DfareportingConversionsBatchinsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingConversionsBatchinsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConversionsBatchInsertResponse)
    ], DfareportingConversionsBatchinsertResponse.prototype, "conversionsBatchInsertResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingConversionsBatchinsertResponse.prototype, "statusCode", void 0);
    return DfareportingConversionsBatchinsertResponse;
}(SpeakeasyBase));
export { DfareportingConversionsBatchinsertResponse };
