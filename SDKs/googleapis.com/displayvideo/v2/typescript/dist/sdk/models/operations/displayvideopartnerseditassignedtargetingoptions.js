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
var DisplayvideoPartnersEditAssignedTargetingOptionsPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersEditAssignedTargetingOptionsPathParams, _super);
    function DisplayvideoPartnersEditAssignedTargetingOptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsPathParams.prototype, "partnerId", void 0);
    return DisplayvideoPartnersEditAssignedTargetingOptionsPathParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersEditAssignedTargetingOptionsPathParams };
var DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams, _super);
    function DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams;
}(SpeakeasyBase));
export { DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams };
var DisplayvideoPartnersEditAssignedTargetingOptionsSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersEditAssignedTargetingOptionsSecurity, _super);
    function DisplayvideoPartnersEditAssignedTargetingOptionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoPartnersEditAssignedTargetingOptionsSecurity;
}(SpeakeasyBase));
export { DisplayvideoPartnersEditAssignedTargetingOptionsSecurity };
var DisplayvideoPartnersEditAssignedTargetingOptionsRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersEditAssignedTargetingOptionsRequest, _super);
    function DisplayvideoPartnersEditAssignedTargetingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersEditAssignedTargetingOptionsPathParams)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkEditPartnerAssignedTargetingOptionsRequestInput)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoPartnersEditAssignedTargetingOptionsSecurity)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsRequest.prototype, "security", void 0);
    return DisplayvideoPartnersEditAssignedTargetingOptionsRequest;
}(SpeakeasyBase));
export { DisplayvideoPartnersEditAssignedTargetingOptionsRequest };
var DisplayvideoPartnersEditAssignedTargetingOptionsResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoPartnersEditAssignedTargetingOptionsResponse, _super);
    function DisplayvideoPartnersEditAssignedTargetingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkEditPartnerAssignedTargetingOptionsResponse)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsResponse.prototype, "bulkEditPartnerAssignedTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoPartnersEditAssignedTargetingOptionsResponse.prototype, "statusCode", void 0);
    return DisplayvideoPartnersEditAssignedTargetingOptionsResponse;
}(SpeakeasyBase));
export { DisplayvideoPartnersEditAssignedTargetingOptionsResponse };
