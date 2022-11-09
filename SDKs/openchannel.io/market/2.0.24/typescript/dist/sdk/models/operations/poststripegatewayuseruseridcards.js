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
var PostStripeGatewayUserUserIdCardsPathParams = /** @class */ (function (_super) {
    __extends(PostStripeGatewayUserUserIdCardsPathParams, _super);
    function PostStripeGatewayUserUserIdCardsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsPathParams.prototype, "userId", void 0);
    return PostStripeGatewayUserUserIdCardsPathParams;
}(SpeakeasyBase));
export { PostStripeGatewayUserUserIdCardsPathParams };
var PostStripeGatewayUserUserIdCardsQueryParams = /** @class */ (function (_super) {
    __extends(PostStripeGatewayUserUserIdCardsQueryParams, _super);
    function PostStripeGatewayUserUserIdCardsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isDefault" }),
        __metadata("design:type", Boolean)
    ], PostStripeGatewayUserUserIdCardsQueryParams.prototype, "isDefault", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsQueryParams.prototype, "token", void 0);
    return PostStripeGatewayUserUserIdCardsQueryParams;
}(SpeakeasyBase));
export { PostStripeGatewayUserUserIdCardsQueryParams };
var PostStripeGatewayUserUserIdCardsRequest = /** @class */ (function (_super) {
    __extends(PostStripeGatewayUserUserIdCardsRequest, _super);
    function PostStripeGatewayUserUserIdCardsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostStripeGatewayUserUserIdCardsPathParams)
    ], PostStripeGatewayUserUserIdCardsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostStripeGatewayUserUserIdCardsQueryParams)
    ], PostStripeGatewayUserUserIdCardsRequest.prototype, "queryParams", void 0);
    return PostStripeGatewayUserUserIdCardsRequest;
}(SpeakeasyBase));
export { PostStripeGatewayUserUserIdCardsRequest };
var PostStripeGatewayUserUserIdCardsResponse = /** @class */ (function (_super) {
    __extends(PostStripeGatewayUserUserIdCardsResponse, _super);
    function PostStripeGatewayUserUserIdCardsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostStripeGatewayUserUserIdCardsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostStripeGatewayUserUserIdCardsResponse.prototype, "statusCode", void 0);
    return PostStripeGatewayUserUserIdCardsResponse;
}(SpeakeasyBase));
export { PostStripeGatewayUserUserIdCardsResponse };
