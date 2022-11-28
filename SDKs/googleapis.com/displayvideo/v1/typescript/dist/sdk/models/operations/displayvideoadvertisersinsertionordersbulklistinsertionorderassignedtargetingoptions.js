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
var DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams, _super);
    function DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=insertionOrderId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams.prototype, "insertionOrderId", void 0);
    return DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams };
var DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams, _super);
    function DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams };
var DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity, _super);
    function DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity };
var DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest, _super);
    function DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsQueryParams)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest };
var DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse, _super);
    function DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkListInsertionOrderAssignedTargetingOptionsResponse)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse.prototype, "bulkListInsertionOrderAssignedTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse };
