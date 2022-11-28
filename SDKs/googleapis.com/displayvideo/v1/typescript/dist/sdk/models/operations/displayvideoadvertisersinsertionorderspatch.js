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
var DisplayvideoAdvertisersInsertionOrdersPatchPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersPatchPathParams, _super);
    function DisplayvideoAdvertisersInsertionOrdersPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=insertionOrderId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchPathParams.prototype, "insertionOrderId", void 0);
    return DisplayvideoAdvertisersInsertionOrdersPatchPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersPatchPathParams };
var DisplayvideoAdvertisersInsertionOrdersPatchQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersPatchQueryParams, _super);
    function DisplayvideoAdvertisersInsertionOrdersPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersInsertionOrdersPatchQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersPatchQueryParams };
var DisplayvideoAdvertisersInsertionOrdersPatchSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersPatchSecurity, _super);
    function DisplayvideoAdvertisersInsertionOrdersPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersInsertionOrdersPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersInsertionOrdersPatchSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersInsertionOrdersPatchSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersPatchSecurity };
var DisplayvideoAdvertisersInsertionOrdersPatchRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersPatchRequest, _super);
    function DisplayvideoAdvertisersInsertionOrdersPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersPatchPathParams)
    ], DisplayvideoAdvertisersInsertionOrdersPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersPatchQueryParams)
    ], DisplayvideoAdvertisersInsertionOrdersPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InsertionOrderInput)
    ], DisplayvideoAdvertisersInsertionOrdersPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersInsertionOrdersPatchSecurity)
    ], DisplayvideoAdvertisersInsertionOrdersPatchRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersInsertionOrdersPatchRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersPatchRequest };
var DisplayvideoAdvertisersInsertionOrdersPatchResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersInsertionOrdersPatchResponse, _super);
    function DisplayvideoAdvertisersInsertionOrdersPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersInsertionOrdersPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InsertionOrder)
    ], DisplayvideoAdvertisersInsertionOrdersPatchResponse.prototype, "insertionOrder", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersInsertionOrdersPatchResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersInsertionOrdersPatchResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersInsertionOrdersPatchResponse };
