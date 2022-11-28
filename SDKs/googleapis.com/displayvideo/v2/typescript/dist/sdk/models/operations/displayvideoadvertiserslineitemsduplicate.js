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
var DisplayvideoAdvertisersLineItemsDuplicatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsDuplicatePathParams, _super);
    function DisplayvideoAdvertisersLineItemsDuplicatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicatePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lineItemId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicatePathParams.prototype, "lineItemId", void 0);
    return DisplayvideoAdvertisersLineItemsDuplicatePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsDuplicatePathParams };
var DisplayvideoAdvertisersLineItemsDuplicateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsDuplicateQueryParams, _super);
    function DisplayvideoAdvertisersLineItemsDuplicateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersLineItemsDuplicateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersLineItemsDuplicateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsDuplicateQueryParams };
var DisplayvideoAdvertisersLineItemsDuplicateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsDuplicateSecurity, _super);
    function DisplayvideoAdvertisersLineItemsDuplicateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersLineItemsDuplicateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersLineItemsDuplicateSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersLineItemsDuplicateSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsDuplicateSecurity };
var DisplayvideoAdvertisersLineItemsDuplicateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsDuplicateRequest, _super);
    function DisplayvideoAdvertisersLineItemsDuplicateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsDuplicatePathParams)
    ], DisplayvideoAdvertisersLineItemsDuplicateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsDuplicateQueryParams)
    ], DisplayvideoAdvertisersLineItemsDuplicateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DuplicateLineItemRequest)
    ], DisplayvideoAdvertisersLineItemsDuplicateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersLineItemsDuplicateSecurity)
    ], DisplayvideoAdvertisersLineItemsDuplicateRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersLineItemsDuplicateRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsDuplicateRequest };
var DisplayvideoAdvertisersLineItemsDuplicateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersLineItemsDuplicateResponse, _super);
    function DisplayvideoAdvertisersLineItemsDuplicateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersLineItemsDuplicateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DuplicateLineItemResponse)
    ], DisplayvideoAdvertisersLineItemsDuplicateResponse.prototype, "duplicateLineItemResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersLineItemsDuplicateResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersLineItemsDuplicateResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersLineItemsDuplicateResponse };
