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
var ContentOrdersSetlineitemmetadataPathParams = /** @class */ (function (_super) {
    __extends(ContentOrdersSetlineitemmetadataPathParams, _super);
    function ContentOrdersSetlineitemmetadataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataPathParams.prototype, "orderId", void 0);
    return ContentOrdersSetlineitemmetadataPathParams;
}(SpeakeasyBase));
export { ContentOrdersSetlineitemmetadataPathParams };
var ContentOrdersSetlineitemmetadataQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrdersSetlineitemmetadataQueryParams, _super);
    function ContentOrdersSetlineitemmetadataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrdersSetlineitemmetadataQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrdersSetlineitemmetadataQueryParams;
}(SpeakeasyBase));
export { ContentOrdersSetlineitemmetadataQueryParams };
var ContentOrdersSetlineitemmetadataSecurity = /** @class */ (function (_super) {
    __extends(ContentOrdersSetlineitemmetadataSecurity, _super);
    function ContentOrdersSetlineitemmetadataSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrdersSetlineitemmetadataSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrdersSetlineitemmetadataSecurity.prototype, "oauth2c", void 0);
    return ContentOrdersSetlineitemmetadataSecurity;
}(SpeakeasyBase));
export { ContentOrdersSetlineitemmetadataSecurity };
var ContentOrdersSetlineitemmetadataRequest = /** @class */ (function (_super) {
    __extends(ContentOrdersSetlineitemmetadataRequest, _super);
    function ContentOrdersSetlineitemmetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersSetlineitemmetadataPathParams)
    ], ContentOrdersSetlineitemmetadataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersSetlineitemmetadataQueryParams)
    ], ContentOrdersSetlineitemmetadataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OrdersSetLineItemMetadataRequest)
    ], ContentOrdersSetlineitemmetadataRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersSetlineitemmetadataSecurity)
    ], ContentOrdersSetlineitemmetadataRequest.prototype, "security", void 0);
    return ContentOrdersSetlineitemmetadataRequest;
}(SpeakeasyBase));
export { ContentOrdersSetlineitemmetadataRequest };
var ContentOrdersSetlineitemmetadataResponse = /** @class */ (function (_super) {
    __extends(ContentOrdersSetlineitemmetadataResponse, _super);
    function ContentOrdersSetlineitemmetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrdersSetlineitemmetadataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrdersSetLineItemMetadataResponse)
    ], ContentOrdersSetlineitemmetadataResponse.prototype, "ordersSetLineItemMetadataResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrdersSetlineitemmetadataResponse.prototype, "statusCode", void 0);
    return ContentOrdersSetlineitemmetadataResponse;
}(SpeakeasyBase));
export { ContentOrdersSetlineitemmetadataResponse };
