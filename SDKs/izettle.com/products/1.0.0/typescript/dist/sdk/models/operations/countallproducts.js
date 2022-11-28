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
var CountAllProductsPathParams = /** @class */ (function (_super) {
    __extends(CountAllProductsPathParams, _super);
    function CountAllProductsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" }),
        __metadata("design:type", String)
    ], CountAllProductsPathParams.prototype, "organizationUuid", void 0);
    return CountAllProductsPathParams;
}(SpeakeasyBase));
export { CountAllProductsPathParams };
var CountAllProductsSecurity = /** @class */ (function (_super) {
    __extends(CountAllProductsSecurity, _super);
    function CountAllProductsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeZettleApiKey)
    ], CountAllProductsSecurity.prototype, "zettleApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeZettleOauth)
    ], CountAllProductsSecurity.prototype, "zettleOauth", void 0);
    return CountAllProductsSecurity;
}(SpeakeasyBase));
export { CountAllProductsSecurity };
var CountAllProductsRequest = /** @class */ (function (_super) {
    __extends(CountAllProductsRequest, _super);
    function CountAllProductsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CountAllProductsPathParams)
    ], CountAllProductsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CountAllProductsSecurity)
    ], CountAllProductsRequest.prototype, "security", void 0);
    return CountAllProductsRequest;
}(SpeakeasyBase));
export { CountAllProductsRequest };
var CountAllProductsResponse = /** @class */ (function (_super) {
    __extends(CountAllProductsResponse, _super);
    function CountAllProductsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CountAllProductsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ProductCountResponse }),
        __metadata("design:type", Array)
    ], CountAllProductsResponse.prototype, "productCountResponses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CountAllProductsResponse.prototype, "statusCode", void 0);
    return CountAllProductsResponse;
}(SpeakeasyBase));
export { CountAllProductsResponse };
