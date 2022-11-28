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
var DlpProjectsLocationsJobTriggersCreatePathParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsJobTriggersCreatePathParams, _super);
    function DlpProjectsLocationsJobTriggersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreatePathParams.prototype, "parent", void 0);
    return DlpProjectsLocationsJobTriggersCreatePathParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsJobTriggersCreatePathParams };
var DlpProjectsLocationsJobTriggersCreateQueryParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsJobTriggersCreateQueryParams, _super);
    function DlpProjectsLocationsJobTriggersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DlpProjectsLocationsJobTriggersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DlpProjectsLocationsJobTriggersCreateQueryParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsJobTriggersCreateQueryParams };
var DlpProjectsLocationsJobTriggersCreateSecurity = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsJobTriggersCreateSecurity, _super);
    function DlpProjectsLocationsJobTriggersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DlpProjectsLocationsJobTriggersCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DlpProjectsLocationsJobTriggersCreateSecurity.prototype, "oauth2c", void 0);
    return DlpProjectsLocationsJobTriggersCreateSecurity;
}(SpeakeasyBase));
export { DlpProjectsLocationsJobTriggersCreateSecurity };
var DlpProjectsLocationsJobTriggersCreateRequest = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsJobTriggersCreateRequest, _super);
    function DlpProjectsLocationsJobTriggersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsJobTriggersCreatePathParams)
    ], DlpProjectsLocationsJobTriggersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsJobTriggersCreateQueryParams)
    ], DlpProjectsLocationsJobTriggersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GooglePrivacyDlpV2CreateJobTriggerRequestInput)
    ], DlpProjectsLocationsJobTriggersCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsJobTriggersCreateSecurity)
    ], DlpProjectsLocationsJobTriggersCreateRequest.prototype, "security", void 0);
    return DlpProjectsLocationsJobTriggersCreateRequest;
}(SpeakeasyBase));
export { DlpProjectsLocationsJobTriggersCreateRequest };
var DlpProjectsLocationsJobTriggersCreateResponse = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsJobTriggersCreateResponse, _super);
    function DlpProjectsLocationsJobTriggersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DlpProjectsLocationsJobTriggersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePrivacyDlpV2JobTrigger)
    ], DlpProjectsLocationsJobTriggersCreateResponse.prototype, "googlePrivacyDlpV2JobTrigger", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DlpProjectsLocationsJobTriggersCreateResponse.prototype, "statusCode", void 0);
    return DlpProjectsLocationsJobTriggersCreateResponse;
}(SpeakeasyBase));
export { DlpProjectsLocationsJobTriggersCreateResponse };
