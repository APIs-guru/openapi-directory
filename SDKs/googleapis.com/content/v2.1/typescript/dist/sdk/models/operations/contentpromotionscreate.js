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
var ContentPromotionsCreatePathParams = /** @class */ (function (_super) {
    __extends(ContentPromotionsCreatePathParams, _super);
    function ContentPromotionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentPromotionsCreatePathParams.prototype, "merchantId", void 0);
    return ContentPromotionsCreatePathParams;
}(SpeakeasyBase));
export { ContentPromotionsCreatePathParams };
var ContentPromotionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContentPromotionsCreateQueryParams, _super);
    function ContentPromotionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentPromotionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentPromotionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentPromotionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentPromotionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentPromotionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentPromotionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentPromotionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentPromotionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentPromotionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentPromotionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentPromotionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ContentPromotionsCreateQueryParams;
}(SpeakeasyBase));
export { ContentPromotionsCreateQueryParams };
var ContentPromotionsCreateSecurity = /** @class */ (function (_super) {
    __extends(ContentPromotionsCreateSecurity, _super);
    function ContentPromotionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentPromotionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentPromotionsCreateSecurity.prototype, "oauth2c", void 0);
    return ContentPromotionsCreateSecurity;
}(SpeakeasyBase));
export { ContentPromotionsCreateSecurity };
var ContentPromotionsCreateRequest = /** @class */ (function (_super) {
    __extends(ContentPromotionsCreateRequest, _super);
    function ContentPromotionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentPromotionsCreatePathParams)
    ], ContentPromotionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentPromotionsCreateQueryParams)
    ], ContentPromotionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PromotionInput)
    ], ContentPromotionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentPromotionsCreateSecurity)
    ], ContentPromotionsCreateRequest.prototype, "security", void 0);
    return ContentPromotionsCreateRequest;
}(SpeakeasyBase));
export { ContentPromotionsCreateRequest };
var ContentPromotionsCreateResponse = /** @class */ (function (_super) {
    __extends(ContentPromotionsCreateResponse, _super);
    function ContentPromotionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentPromotionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Promotion)
    ], ContentPromotionsCreateResponse.prototype, "promotion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentPromotionsCreateResponse.prototype, "statusCode", void 0);
    return ContentPromotionsCreateResponse;
}(SpeakeasyBase));
export { ContentPromotionsCreateResponse };
