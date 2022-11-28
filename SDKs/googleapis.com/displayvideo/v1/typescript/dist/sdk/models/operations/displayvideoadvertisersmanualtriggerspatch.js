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
var DisplayvideoAdvertisersManualTriggersPatchPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersPatchPathParams, _super);
    function DisplayvideoAdvertisersManualTriggersPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=triggerId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchPathParams.prototype, "triggerId", void 0);
    return DisplayvideoAdvertisersManualTriggersPatchPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersPatchPathParams };
var DisplayvideoAdvertisersManualTriggersPatchQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersPatchQueryParams, _super);
    function DisplayvideoAdvertisersManualTriggersPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersManualTriggersPatchQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersPatchQueryParams };
var DisplayvideoAdvertisersManualTriggersPatchSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersPatchSecurity, _super);
    function DisplayvideoAdvertisersManualTriggersPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersManualTriggersPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersManualTriggersPatchSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersManualTriggersPatchSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersPatchSecurity };
var DisplayvideoAdvertisersManualTriggersPatchRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersPatchRequest, _super);
    function DisplayvideoAdvertisersManualTriggersPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersPatchPathParams)
    ], DisplayvideoAdvertisersManualTriggersPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersPatchQueryParams)
    ], DisplayvideoAdvertisersManualTriggersPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ManualTriggerInput)
    ], DisplayvideoAdvertisersManualTriggersPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersManualTriggersPatchSecurity)
    ], DisplayvideoAdvertisersManualTriggersPatchRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersManualTriggersPatchRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersPatchRequest };
var DisplayvideoAdvertisersManualTriggersPatchResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersManualTriggersPatchResponse, _super);
    function DisplayvideoAdvertisersManualTriggersPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersManualTriggersPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManualTrigger)
    ], DisplayvideoAdvertisersManualTriggersPatchResponse.prototype, "manualTrigger", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersManualTriggersPatchResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersManualTriggersPatchResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersManualTriggersPatchResponse };
