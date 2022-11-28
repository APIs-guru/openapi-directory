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
var DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsPathParams, _super);
    function DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lineItemId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsPathParams.prototype, "lineItemId", void 0);
    return DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsPathParams };
var DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams, _super);
    function DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams };
var DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity, _super);
    function DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity };
var DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest, _super);
    function DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsPathParams)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsQueryParams)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest };
var DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse, _super);
    function DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkListLineItemAssignedTargetingOptionsResponse)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse.prototype, "bulkListLineItemAssignedTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse };
