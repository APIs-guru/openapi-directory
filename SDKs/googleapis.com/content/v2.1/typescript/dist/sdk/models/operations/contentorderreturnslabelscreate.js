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
var ContentOrderreturnsLabelsCreatePathParams = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsLabelsCreatePathParams, _super);
    function ContentOrderreturnsLabelsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreatePathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=returnId" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreatePathParams.prototype, "returnId", void 0);
    return ContentOrderreturnsLabelsCreatePathParams;
}(SpeakeasyBase));
export { ContentOrderreturnsLabelsCreatePathParams };
var ContentOrderreturnsLabelsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsLabelsCreateQueryParams, _super);
    function ContentOrderreturnsLabelsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrderreturnsLabelsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrderreturnsLabelsCreateQueryParams;
}(SpeakeasyBase));
export { ContentOrderreturnsLabelsCreateQueryParams };
var ContentOrderreturnsLabelsCreateSecurity = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsLabelsCreateSecurity, _super);
    function ContentOrderreturnsLabelsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrderreturnsLabelsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrderreturnsLabelsCreateSecurity.prototype, "oauth2c", void 0);
    return ContentOrderreturnsLabelsCreateSecurity;
}(SpeakeasyBase));
export { ContentOrderreturnsLabelsCreateSecurity };
var ContentOrderreturnsLabelsCreateRequest = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsLabelsCreateRequest, _super);
    function ContentOrderreturnsLabelsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreturnsLabelsCreatePathParams)
    ], ContentOrderreturnsLabelsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreturnsLabelsCreateQueryParams)
    ], ContentOrderreturnsLabelsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReturnShippingLabel)
    ], ContentOrderreturnsLabelsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrderreturnsLabelsCreateSecurity)
    ], ContentOrderreturnsLabelsCreateRequest.prototype, "security", void 0);
    return ContentOrderreturnsLabelsCreateRequest;
}(SpeakeasyBase));
export { ContentOrderreturnsLabelsCreateRequest };
var ContentOrderreturnsLabelsCreateResponse = /** @class */ (function (_super) {
    __extends(ContentOrderreturnsLabelsCreateResponse, _super);
    function ContentOrderreturnsLabelsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrderreturnsLabelsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReturnShippingLabel)
    ], ContentOrderreturnsLabelsCreateResponse.prototype, "returnShippingLabel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrderreturnsLabelsCreateResponse.prototype, "statusCode", void 0);
    return ContentOrderreturnsLabelsCreateResponse;
}(SpeakeasyBase));
export { ContentOrderreturnsLabelsCreateResponse };
