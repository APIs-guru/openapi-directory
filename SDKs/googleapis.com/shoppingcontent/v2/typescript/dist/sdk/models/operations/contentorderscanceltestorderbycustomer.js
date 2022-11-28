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
var ContentOrdersCanceltestorderbycustomerPathParams = /** @class */ (function (_super) {
    __extends(ContentOrdersCanceltestorderbycustomerPathParams, _super);
    function ContentOrdersCanceltestorderbycustomerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerPathParams.prototype, "orderId", void 0);
    return ContentOrdersCanceltestorderbycustomerPathParams;
}(SpeakeasyBase));
export { ContentOrdersCanceltestorderbycustomerPathParams };
var ContentOrdersCanceltestorderbycustomerQueryParams = /** @class */ (function (_super) {
    __extends(ContentOrdersCanceltestorderbycustomerQueryParams, _super);
    function ContentOrdersCanceltestorderbycustomerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentOrdersCanceltestorderbycustomerQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerQueryParams.prototype, "uploadProtocol", void 0);
    return ContentOrdersCanceltestorderbycustomerQueryParams;
}(SpeakeasyBase));
export { ContentOrdersCanceltestorderbycustomerQueryParams };
var ContentOrdersCanceltestorderbycustomerSecurity = /** @class */ (function (_super) {
    __extends(ContentOrdersCanceltestorderbycustomerSecurity, _super);
    function ContentOrdersCanceltestorderbycustomerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentOrdersCanceltestorderbycustomerSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentOrdersCanceltestorderbycustomerSecurity.prototype, "oauth2c", void 0);
    return ContentOrdersCanceltestorderbycustomerSecurity;
}(SpeakeasyBase));
export { ContentOrdersCanceltestorderbycustomerSecurity };
var ContentOrdersCanceltestorderbycustomerRequest = /** @class */ (function (_super) {
    __extends(ContentOrdersCanceltestorderbycustomerRequest, _super);
    function ContentOrdersCanceltestorderbycustomerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersCanceltestorderbycustomerPathParams)
    ], ContentOrdersCanceltestorderbycustomerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersCanceltestorderbycustomerQueryParams)
    ], ContentOrdersCanceltestorderbycustomerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OrdersCancelTestOrderByCustomerRequest)
    ], ContentOrdersCanceltestorderbycustomerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentOrdersCanceltestorderbycustomerSecurity)
    ], ContentOrdersCanceltestorderbycustomerRequest.prototype, "security", void 0);
    return ContentOrdersCanceltestorderbycustomerRequest;
}(SpeakeasyBase));
export { ContentOrdersCanceltestorderbycustomerRequest };
var ContentOrdersCanceltestorderbycustomerResponse = /** @class */ (function (_super) {
    __extends(ContentOrdersCanceltestorderbycustomerResponse, _super);
    function ContentOrdersCanceltestorderbycustomerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentOrdersCanceltestorderbycustomerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OrdersCancelTestOrderByCustomerResponse)
    ], ContentOrdersCanceltestorderbycustomerResponse.prototype, "ordersCancelTestOrderByCustomerResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentOrdersCanceltestorderbycustomerResponse.prototype, "statusCode", void 0);
    return ContentOrdersCanceltestorderbycustomerResponse;
}(SpeakeasyBase));
export { ContentOrdersCanceltestorderbycustomerResponse };
