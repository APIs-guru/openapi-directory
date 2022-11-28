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
var DisplayvideoAdvertisersManualTriggersActivatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersActivatePathParams, _super);
    function DisplayvideoAdvertisersManualTriggersActivatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivatePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=triggerId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivatePathParams.prototype, "triggerId", void 0);
    return DisplayvideoAdvertisersManualTriggersActivatePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersActivatePathParams };
var DisplayvideoAdvertisersManualTriggersActivateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersActivateQueryParams, _super);
    function DisplayvideoAdvertisersManualTriggersActivateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersManualTriggersActivateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersManualTriggersActivateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersActivateQueryParams };
var DisplayvideoAdvertisersManualTriggersActivateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersActivateSecurity, _super);
    function DisplayvideoAdvertisersManualTriggersActivateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersManualTriggersActivateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersManualTriggersActivateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersManualTriggersActivateSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersActivateSecurity };
var DisplayvideoAdvertisersManualTriggersActivateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersActivateRequest, _super);
    function DisplayvideoAdvertisersManualTriggersActivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersActivatePathParams)
    ], DisplayvideoAdvertisersManualTriggersActivateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersActivateQueryParams)
    ], DisplayvideoAdvertisersManualTriggersActivateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DisplayvideoAdvertisersManualTriggersActivateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersActivateSecurity)
    ], DisplayvideoAdvertisersManualTriggersActivateRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersManualTriggersActivateRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersActivateRequest };
var DisplayvideoAdvertisersManualTriggersActivateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersActivateResponse, _super);
    function DisplayvideoAdvertisersManualTriggersActivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersActivateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManualTrigger)
    ], DisplayvideoAdvertisersManualTriggersActivateResponse.prototype, "manualTrigger", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersManualTriggersActivateResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersManualTriggersActivateResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersActivateResponse };
