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
var ContentOrdertrackingsignalsCreatePathParams = /** @class */ (function (_super) {
    __extends(ContentOrdertrackingsignalsCreatePathParams, _super);
    function ContentOrdertrackingsignalsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreatePathParams.prototype, "merchantId", void 0);
    return ContentOrdertrackingsignalsCreatePathParams;
}(SpeakeasyBase));
export { ContentOrdertrackingsignalsCreatePathParams };
var ContentOrdertrackingsignalsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrdertrackingsignalsCreateQueryParams, _super);
    function ContentOrdertrackingsignalsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrdertrackingsignalsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrdertrackingsignalsCreateQueryParams;
}(SpeakeasyBase));
export { ContentOrdertrackingsignalsCreateQueryParams };
var ContentOrdertrackingsignalsCreateSecurity = /** @class */ (function (_super) {
    __extends(ContentOrdertrackingsignalsCreateSecurity, _super);
    function ContentOrdertrackingsignalsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrdertrackingsignalsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrdertrackingsignalsCreateSecurity.prototype, "oauth2c", void 0);
    return ContentOrdertrackingsignalsCreateSecurity;
}(SpeakeasyBase));
export { ContentOrdertrackingsignalsCreateSecurity };
var ContentOrdertrackingsignalsCreateRequest = /** @class */ (function (_super) {
    __extends(ContentOrdertrackingsignalsCreateRequest, _super);
    function ContentOrdertrackingsignalsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdertrackingsignalsCreatePathParams)
    ], ContentOrdertrackingsignalsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdertrackingsignalsCreateQueryParams)
    ], ContentOrdertrackingsignalsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OrderTrackingSignalInput)
    ], ContentOrdertrackingsignalsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdertrackingsignalsCreateSecurity)
    ], ContentOrdertrackingsignalsCreateRequest.prototype, "security", void 0);
    return ContentOrdertrackingsignalsCreateRequest;
}(SpeakeasyBase));
export { ContentOrdertrackingsignalsCreateRequest };
var ContentOrdertrackingsignalsCreateResponse = /** @class */ (function (_super) {
    __extends(ContentOrdertrackingsignalsCreateResponse, _super);
    function ContentOrdertrackingsignalsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrdertrackingsignalsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrderTrackingSignal)
    ], ContentOrdertrackingsignalsCreateResponse.prototype, "orderTrackingSignal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrdertrackingsignalsCreateResponse.prototype, "statusCode", void 0);
    return ContentOrdertrackingsignalsCreateResponse;
}(SpeakeasyBase));
export { ContentOrdertrackingsignalsCreateResponse };
