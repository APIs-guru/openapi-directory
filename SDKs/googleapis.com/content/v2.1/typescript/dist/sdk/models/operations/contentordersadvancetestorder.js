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
var ContentOrdersAdvancetestorderPathParams = /** @class */ (function (_super) {
    __extends(ContentOrdersAdvancetestorderPathParams, _super);
    function ContentOrdersAdvancetestorderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderPathParams.prototype, "orderId", void 0);
    return ContentOrdersAdvancetestorderPathParams;
}(SpeakeasyBase));
export { ContentOrdersAdvancetestorderPathParams };
var ContentOrdersAdvancetestorderQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrdersAdvancetestorderQueryParams, _super);
    function ContentOrdersAdvancetestorderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrdersAdvancetestorderQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrdersAdvancetestorderQueryParams;
}(SpeakeasyBase));
export { ContentOrdersAdvancetestorderQueryParams };
var ContentOrdersAdvancetestorderSecurity = /** @class */ (function (_super) {
    __extends(ContentOrdersAdvancetestorderSecurity, _super);
    function ContentOrdersAdvancetestorderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrdersAdvancetestorderSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrdersAdvancetestorderSecurity.prototype, "oauth2c", void 0);
    return ContentOrdersAdvancetestorderSecurity;
}(SpeakeasyBase));
export { ContentOrdersAdvancetestorderSecurity };
var ContentOrdersAdvancetestorderRequest = /** @class */ (function (_super) {
    __extends(ContentOrdersAdvancetestorderRequest, _super);
    function ContentOrdersAdvancetestorderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersAdvancetestorderPathParams)
    ], ContentOrdersAdvancetestorderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersAdvancetestorderQueryParams)
    ], ContentOrdersAdvancetestorderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersAdvancetestorderSecurity)
    ], ContentOrdersAdvancetestorderRequest.prototype, "security", void 0);
    return ContentOrdersAdvancetestorderRequest;
}(SpeakeasyBase));
export { ContentOrdersAdvancetestorderRequest };
var ContentOrdersAdvancetestorderResponse = /** @class */ (function (_super) {
    __extends(ContentOrdersAdvancetestorderResponse, _super);
    function ContentOrdersAdvancetestorderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrdersAdvancetestorderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrdersAdvanceTestOrderResponse)
    ], ContentOrdersAdvancetestorderResponse.prototype, "ordersAdvanceTestOrderResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrdersAdvancetestorderResponse.prototype, "statusCode", void 0);
    return ContentOrdersAdvancetestorderResponse;
}(SpeakeasyBase));
export { ContentOrdersAdvancetestorderResponse };
