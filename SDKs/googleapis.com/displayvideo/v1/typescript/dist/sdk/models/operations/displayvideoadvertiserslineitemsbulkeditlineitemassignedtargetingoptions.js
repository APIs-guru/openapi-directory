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
var DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams, _super);
    function DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lineItemId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams.prototype, "lineItemId", void 0);
    return DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams };
var DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams, _super);
    function DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams };
var DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity, _super);
    function DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity };
var DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest, _super);
    function DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsPathParams)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsQueryParams)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkEditLineItemAssignedTargetingOptionsRequestInput)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest };
var DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse, _super);
    function DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkEditLineItemAssignedTargetingOptionsResponse)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse.prototype, "bulkEditLineItemAssignedTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse };
