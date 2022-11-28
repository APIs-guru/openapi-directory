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
var DisplayvideoAdvertisersManualTriggersDeactivatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersDeactivatePathParams, _super);
    function DisplayvideoAdvertisersManualTriggersDeactivatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivatePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=triggerId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivatePathParams.prototype, "triggerId", void 0);
    return DisplayvideoAdvertisersManualTriggersDeactivatePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersDeactivatePathParams };
var DisplayvideoAdvertisersManualTriggersDeactivateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersDeactivateQueryParams, _super);
    function DisplayvideoAdvertisersManualTriggersDeactivateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersManualTriggersDeactivateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersManualTriggersDeactivateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersDeactivateQueryParams };
var DisplayvideoAdvertisersManualTriggersDeactivateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersDeactivateSecurity, _super);
    function DisplayvideoAdvertisersManualTriggersDeactivateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersManualTriggersDeactivateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersManualTriggersDeactivateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersManualTriggersDeactivateSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersDeactivateSecurity };
var DisplayvideoAdvertisersManualTriggersDeactivateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersDeactivateRequest, _super);
    function DisplayvideoAdvertisersManualTriggersDeactivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersDeactivatePathParams)
    ], DisplayvideoAdvertisersManualTriggersDeactivateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersDeactivateQueryParams)
    ], DisplayvideoAdvertisersManualTriggersDeactivateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DisplayvideoAdvertisersManualTriggersDeactivateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersDeactivateSecurity)
    ], DisplayvideoAdvertisersManualTriggersDeactivateRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersManualTriggersDeactivateRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersDeactivateRequest };
var DisplayvideoAdvertisersManualTriggersDeactivateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersDeactivateResponse, _super);
    function DisplayvideoAdvertisersManualTriggersDeactivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersDeactivateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManualTrigger)
    ], DisplayvideoAdvertisersManualTriggersDeactivateResponse.prototype, "manualTrigger", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersManualTriggersDeactivateResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersManualTriggersDeactivateResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersDeactivateResponse };
