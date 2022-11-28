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
var PostStoreCreateJsonQueryParams = /** @class */ (function (_super) {
    __extends(PostStoreCreateJsonQueryParams, _super);
    function PostStoreCreateJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auth_token" }),
        __metadata("design:type", String)
    ], PostStoreCreateJsonQueryParams.prototype, "authToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_code" }),
        __metadata("design:type", String)
    ], PostStoreCreateJsonQueryParams.prototype, "partnerCode", void 0);
    return PostStoreCreateJsonQueryParams;
}(SpeakeasyBase));
export { PostStoreCreateJsonQueryParams };
var PostStoreCreateJsonRequest = /** @class */ (function (_super) {
    __extends(PostStoreCreateJsonRequest, _super);
    function PostStoreCreateJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostStoreCreateJsonQueryParams)
    ], PostStoreCreateJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PartnerStoreCreate)
    ], PostStoreCreateJsonRequest.prototype, "request", void 0);
    return PostStoreCreateJsonRequest;
}(SpeakeasyBase));
export { PostStoreCreateJsonRequest };
var PostStoreCreateJsonResponse = /** @class */ (function (_super) {
    __extends(PostStoreCreateJsonResponse, _super);
    function PostStoreCreateJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostStoreCreateJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartnerError)
    ], PostStoreCreateJsonResponse.prototype, "partnerError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartnerStoreCode)
    ], PostStoreCreateJsonResponse.prototype, "partnerStoreCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostStoreCreateJsonResponse.prototype, "statusCode", void 0);
    return PostStoreCreateJsonResponse;
}(SpeakeasyBase));
export { PostStoreCreateJsonResponse };
