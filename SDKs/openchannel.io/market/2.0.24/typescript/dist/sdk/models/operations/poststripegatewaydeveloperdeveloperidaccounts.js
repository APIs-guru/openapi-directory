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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var PostStripeGatewayDeveloperDeveloperIdAccountsPathParams = /** @class */ (function (_super) {
    __extends(PostStripeGatewayDeveloperDeveloperIdAccountsPathParams, _super);
    function PostStripeGatewayDeveloperDeveloperIdAccountsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=developerId" }),
        __metadata("design:type", String)
    ], PostStripeGatewayDeveloperDeveloperIdAccountsPathParams.prototype, "developerId", void 0);
    return PostStripeGatewayDeveloperDeveloperIdAccountsPathParams;
}(SpeakeasyBase));
export { PostStripeGatewayDeveloperDeveloperIdAccountsPathParams };
var PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams = /** @class */ (function (_super) {
    __extends(PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams, _super);
    function PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=redirectUrl" }),
        __metadata("design:type", String)
    ], PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams.prototype, "redirectUrl", void 0);
    return PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams;
}(SpeakeasyBase));
export { PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams };
var PostStripeGatewayDeveloperDeveloperIdAccountsRequest = /** @class */ (function (_super) {
    __extends(PostStripeGatewayDeveloperDeveloperIdAccountsRequest, _super);
    function PostStripeGatewayDeveloperDeveloperIdAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostStripeGatewayDeveloperDeveloperIdAccountsPathParams)
    ], PostStripeGatewayDeveloperDeveloperIdAccountsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams)
    ], PostStripeGatewayDeveloperDeveloperIdAccountsRequest.prototype, "queryParams", void 0);
    return PostStripeGatewayDeveloperDeveloperIdAccountsRequest;
}(SpeakeasyBase));
export { PostStripeGatewayDeveloperDeveloperIdAccountsRequest };
var PostStripeGatewayDeveloperDeveloperIdAccountsResponse = /** @class */ (function (_super) {
    __extends(PostStripeGatewayDeveloperDeveloperIdAccountsResponse, _super);
    function PostStripeGatewayDeveloperDeveloperIdAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostStripeGatewayDeveloperDeveloperIdAccountsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostStripeGatewayDeveloperDeveloperIdAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostStripeGatewayDeveloperDeveloperIdAccountsResponse.prototype, "statusCode", void 0);
    return PostStripeGatewayDeveloperDeveloperIdAccountsResponse;
}(SpeakeasyBase));
export { PostStripeGatewayDeveloperDeveloperIdAccountsResponse };
