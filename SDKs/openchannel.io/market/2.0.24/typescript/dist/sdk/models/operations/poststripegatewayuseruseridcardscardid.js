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
var PostStripeGatewayUserUserIdCardsCardIdPathParams = /** @class */ (function (_super) {
    __extends(PostStripeGatewayUserUserIdCardsCardIdPathParams, _super);
    function PostStripeGatewayUserUserIdCardsCardIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cardId" }),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsCardIdPathParams.prototype, "cardId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsCardIdPathParams.prototype, "userId", void 0);
    return PostStripeGatewayUserUserIdCardsCardIdPathParams;
}(SpeakeasyBase));
export { PostStripeGatewayUserUserIdCardsCardIdPathParams };
var PostStripeGatewayUserUserIdCardsCardIdQueryParams = /** @class */ (function (_super) {
    __extends(PostStripeGatewayUserUserIdCardsCardIdQueryParams, _super);
    function PostStripeGatewayUserUserIdCardsCardIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_city" }),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsCardIdQueryParams.prototype, "addressCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_country" }),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsCardIdQueryParams.prototype, "addressCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_line1" }),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsCardIdQueryParams.prototype, "addressLine1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_line2" }),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsCardIdQueryParams.prototype, "addressLine2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_state" }),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsCardIdQueryParams.prototype, "addressState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address_zip" }),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsCardIdQueryParams.prototype, "addressZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isDefault" }),
        __metadata("design:type", Boolean)
    ], PostStripeGatewayUserUserIdCardsCardIdQueryParams.prototype, "isDefault", void 0);
    return PostStripeGatewayUserUserIdCardsCardIdQueryParams;
}(SpeakeasyBase));
export { PostStripeGatewayUserUserIdCardsCardIdQueryParams };
var PostStripeGatewayUserUserIdCardsCardIdRequest = /** @class */ (function (_super) {
    __extends(PostStripeGatewayUserUserIdCardsCardIdRequest, _super);
    function PostStripeGatewayUserUserIdCardsCardIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostStripeGatewayUserUserIdCardsCardIdPathParams)
    ], PostStripeGatewayUserUserIdCardsCardIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostStripeGatewayUserUserIdCardsCardIdQueryParams)
    ], PostStripeGatewayUserUserIdCardsCardIdRequest.prototype, "queryParams", void 0);
    return PostStripeGatewayUserUserIdCardsCardIdRequest;
}(SpeakeasyBase));
export { PostStripeGatewayUserUserIdCardsCardIdRequest };
var PostStripeGatewayUserUserIdCardsCardIdResponse = /** @class */ (function (_super) {
    __extends(PostStripeGatewayUserUserIdCardsCardIdResponse, _super);
    function PostStripeGatewayUserUserIdCardsCardIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostStripeGatewayUserUserIdCardsCardIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostStripeGatewayUserUserIdCardsCardIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostStripeGatewayUserUserIdCardsCardIdResponse.prototype, "statusCode", void 0);
    return PostStripeGatewayUserUserIdCardsCardIdResponse;
}(SpeakeasyBase));
export { PostStripeGatewayUserUserIdCardsCardIdResponse };
