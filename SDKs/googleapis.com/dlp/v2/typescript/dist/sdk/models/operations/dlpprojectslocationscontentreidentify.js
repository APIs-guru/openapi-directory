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
var DlpProjectsLocationsContentReidentifyPathParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsContentReidentifyPathParams, _super);
    function DlpProjectsLocationsContentReidentifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyPathParams.prototype, "parent", void 0);
    return DlpProjectsLocationsContentReidentifyPathParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsContentReidentifyPathParams };
var DlpProjectsLocationsContentReidentifyQueryParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsContentReidentifyQueryParams, _super);
    function DlpProjectsLocationsContentReidentifyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DlpProjectsLocationsContentReidentifyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyQueryParams.prototype, "uploadProtocol", void 0);
    return DlpProjectsLocationsContentReidentifyQueryParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsContentReidentifyQueryParams };
var DlpProjectsLocationsContentReidentifySecurity = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsContentReidentifySecurity, _super);
    function DlpProjectsLocationsContentReidentifySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DlpProjectsLocationsContentReidentifySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DlpProjectsLocationsContentReidentifySecurity.prototype, "oauth2c", void 0);
    return DlpProjectsLocationsContentReidentifySecurity;
}(SpeakeasyBase));
export { DlpProjectsLocationsContentReidentifySecurity };
var DlpProjectsLocationsContentReidentifyRequest = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsContentReidentifyRequest, _super);
    function DlpProjectsLocationsContentReidentifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsContentReidentifyPathParams)
    ], DlpProjectsLocationsContentReidentifyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsContentReidentifyQueryParams)
    ], DlpProjectsLocationsContentReidentifyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GooglePrivacyDlpV2ReidentifyContentRequest)
    ], DlpProjectsLocationsContentReidentifyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsContentReidentifySecurity)
    ], DlpProjectsLocationsContentReidentifyRequest.prototype, "security", void 0);
    return DlpProjectsLocationsContentReidentifyRequest;
}(SpeakeasyBase));
export { DlpProjectsLocationsContentReidentifyRequest };
var DlpProjectsLocationsContentReidentifyResponse = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsContentReidentifyResponse, _super);
    function DlpProjectsLocationsContentReidentifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DlpProjectsLocationsContentReidentifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePrivacyDlpV2ReidentifyContentResponse)
    ], DlpProjectsLocationsContentReidentifyResponse.prototype, "googlePrivacyDlpV2ReidentifyContentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DlpProjectsLocationsContentReidentifyResponse.prototype, "statusCode", void 0);
    return DlpProjectsLocationsContentReidentifyResponse;
}(SpeakeasyBase));
export { DlpProjectsLocationsContentReidentifyResponse };
