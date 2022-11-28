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
var DisplayvideoAdvertisersManualTriggersCreatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersCreatePathParams, _super);
    function DisplayvideoAdvertisersManualTriggersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreatePathParams.prototype, "advertiserId", void 0);
    return DisplayvideoAdvertisersManualTriggersCreatePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersCreatePathParams };
var DisplayvideoAdvertisersManualTriggersCreateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersCreateQueryParams, _super);
    function DisplayvideoAdvertisersManualTriggersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersManualTriggersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersManualTriggersCreateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersCreateQueryParams };
var DisplayvideoAdvertisersManualTriggersCreateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersCreateSecurity, _super);
    function DisplayvideoAdvertisersManualTriggersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersManualTriggersCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersManualTriggersCreateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersManualTriggersCreateSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersCreateSecurity };
var DisplayvideoAdvertisersManualTriggersCreateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersCreateRequest, _super);
    function DisplayvideoAdvertisersManualTriggersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersCreatePathParams)
    ], DisplayvideoAdvertisersManualTriggersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersCreateQueryParams)
    ], DisplayvideoAdvertisersManualTriggersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ManualTriggerInput)
    ], DisplayvideoAdvertisersManualTriggersCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersCreateSecurity)
    ], DisplayvideoAdvertisersManualTriggersCreateRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersManualTriggersCreateRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersCreateRequest };
var DisplayvideoAdvertisersManualTriggersCreateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersCreateResponse, _super);
    function DisplayvideoAdvertisersManualTriggersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManualTrigger)
    ], DisplayvideoAdvertisersManualTriggersCreateResponse.prototype, "manualTrigger", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersManualTriggersCreateResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersManualTriggersCreateResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersCreateResponse };
