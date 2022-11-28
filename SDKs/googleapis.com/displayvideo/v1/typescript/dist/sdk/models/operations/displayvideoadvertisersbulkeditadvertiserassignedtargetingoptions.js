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
var DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsPathParams, _super);
    function DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsPathParams.prototype, "advertiserId", void 0);
    return DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsPathParams };
var DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams, _super);
    function DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams };
var DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity, _super);
    function DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity };
var DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest, _super);
    function DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsPathParams)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkEditAdvertiserAssignedTargetingOptionsRequestInput)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest };
var DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse, _super);
    function DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkEditAdvertiserAssignedTargetingOptionsResponse)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse.prototype, "bulkEditAdvertiserAssignedTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse };
