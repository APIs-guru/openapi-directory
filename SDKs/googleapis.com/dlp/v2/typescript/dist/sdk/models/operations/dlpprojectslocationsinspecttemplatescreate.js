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
var DlpProjectsLocationsInspectTemplatesCreatePathParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsInspectTemplatesCreatePathParams, _super);
    function DlpProjectsLocationsInspectTemplatesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreatePathParams.prototype, "parent", void 0);
    return DlpProjectsLocationsInspectTemplatesCreatePathParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsInspectTemplatesCreatePathParams };
var DlpProjectsLocationsInspectTemplatesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsInspectTemplatesCreateQueryParams, _super);
    function DlpProjectsLocationsInspectTemplatesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DlpProjectsLocationsInspectTemplatesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DlpProjectsLocationsInspectTemplatesCreateQueryParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsInspectTemplatesCreateQueryParams };
var DlpProjectsLocationsInspectTemplatesCreateSecurity = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsInspectTemplatesCreateSecurity, _super);
    function DlpProjectsLocationsInspectTemplatesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DlpProjectsLocationsInspectTemplatesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DlpProjectsLocationsInspectTemplatesCreateSecurity.prototype, "oauth2c", void 0);
    return DlpProjectsLocationsInspectTemplatesCreateSecurity;
}(SpeakeasyBase));
export { DlpProjectsLocationsInspectTemplatesCreateSecurity };
var DlpProjectsLocationsInspectTemplatesCreateRequest = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsInspectTemplatesCreateRequest, _super);
    function DlpProjectsLocationsInspectTemplatesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsInspectTemplatesCreatePathParams)
    ], DlpProjectsLocationsInspectTemplatesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsInspectTemplatesCreateQueryParams)
    ], DlpProjectsLocationsInspectTemplatesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GooglePrivacyDlpV2CreateInspectTemplateRequestInput)
    ], DlpProjectsLocationsInspectTemplatesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsInspectTemplatesCreateSecurity)
    ], DlpProjectsLocationsInspectTemplatesCreateRequest.prototype, "security", void 0);
    return DlpProjectsLocationsInspectTemplatesCreateRequest;
}(SpeakeasyBase));
export { DlpProjectsLocationsInspectTemplatesCreateRequest };
var DlpProjectsLocationsInspectTemplatesCreateResponse = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsInspectTemplatesCreateResponse, _super);
    function DlpProjectsLocationsInspectTemplatesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DlpProjectsLocationsInspectTemplatesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePrivacyDlpV2InspectTemplate)
    ], DlpProjectsLocationsInspectTemplatesCreateResponse.prototype, "googlePrivacyDlpV2InspectTemplate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DlpProjectsLocationsInspectTemplatesCreateResponse.prototype, "statusCode", void 0);
    return DlpProjectsLocationsInspectTemplatesCreateResponse;
}(SpeakeasyBase));
export { DlpProjectsLocationsInspectTemplatesCreateResponse };
