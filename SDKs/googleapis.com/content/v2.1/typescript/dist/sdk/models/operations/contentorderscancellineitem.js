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
var ContentOrdersCancellineitemPathParams = /** @class */ (function (_super) {
    __extends(ContentOrdersCancellineitemPathParams, _super);
    function ContentOrdersCancellineitemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemPathParams.prototype, "orderId", void 0);
    return ContentOrdersCancellineitemPathParams;
}(SpeakeasyBase));
export { ContentOrdersCancellineitemPathParams };
var ContentOrdersCancellineitemQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrdersCancellineitemQueryParams, _super);
    function ContentOrdersCancellineitemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrdersCancellineitemQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrdersCancellineitemQueryParams;
}(SpeakeasyBase));
export { ContentOrdersCancellineitemQueryParams };
var ContentOrdersCancellineitemSecurity = /** @class */ (function (_super) {
    __extends(ContentOrdersCancellineitemSecurity, _super);
    function ContentOrdersCancellineitemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrdersCancellineitemSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrdersCancellineitemSecurity.prototype, "oauth2c", void 0);
    return ContentOrdersCancellineitemSecurity;
}(SpeakeasyBase));
export { ContentOrdersCancellineitemSecurity };
var ContentOrdersCancellineitemRequest = /** @class */ (function (_super) {
    __extends(ContentOrdersCancellineitemRequest, _super);
    function ContentOrdersCancellineitemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersCancellineitemPathParams)
    ], ContentOrdersCancellineitemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersCancellineitemQueryParams)
    ], ContentOrdersCancellineitemRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OrdersCancelLineItemRequest)
    ], ContentOrdersCancellineitemRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersCancellineitemSecurity)
    ], ContentOrdersCancellineitemRequest.prototype, "security", void 0);
    return ContentOrdersCancellineitemRequest;
}(SpeakeasyBase));
export { ContentOrdersCancellineitemRequest };
var ContentOrdersCancellineitemResponse = /** @class */ (function (_super) {
    __extends(ContentOrdersCancellineitemResponse, _super);
    function ContentOrdersCancellineitemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrdersCancellineitemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrdersCancelLineItemResponse)
    ], ContentOrdersCancellineitemResponse.prototype, "ordersCancelLineItemResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrdersCancellineitemResponse.prototype, "statusCode", void 0);
    return ContentOrdersCancellineitemResponse;
}(SpeakeasyBase));
export { ContentOrdersCancellineitemResponse };
