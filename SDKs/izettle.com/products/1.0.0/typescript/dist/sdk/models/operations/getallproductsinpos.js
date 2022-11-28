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
var GetAllProductsInPosPathParams = /** @class */ (function (_super) {
    __extends(GetAllProductsInPosPathParams, _super);
    function GetAllProductsInPosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" }),
        __metadata("design:type", String)
    ], GetAllProductsInPosPathParams.prototype, "organizationUuid", void 0);
    return GetAllProductsInPosPathParams;
}(SpeakeasyBase));
export { GetAllProductsInPosPathParams };
var GetAllProductsInPosSecurity = /** @class */ (function (_super) {
    __extends(GetAllProductsInPosSecurity, _super);
    function GetAllProductsInPosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeZettleApiKey)
    ], GetAllProductsInPosSecurity.prototype, "zettleApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeZettleOauth)
    ], GetAllProductsInPosSecurity.prototype, "zettleOauth", void 0);
    return GetAllProductsInPosSecurity;
}(SpeakeasyBase));
export { GetAllProductsInPosSecurity };
var GetAllProductsInPosRequest = /** @class */ (function (_super) {
    __extends(GetAllProductsInPosRequest, _super);
    function GetAllProductsInPosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllProductsInPosPathParams)
    ], GetAllProductsInPosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllProductsInPosSecurity)
    ], GetAllProductsInPosRequest.prototype, "security", void 0);
    return GetAllProductsInPosRequest;
}(SpeakeasyBase));
export { GetAllProductsInPosRequest };
var GetAllProductsInPosResponse = /** @class */ (function (_super) {
    __extends(GetAllProductsInPosResponse, _super);
    function GetAllProductsInPosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllProductsInPosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ProductResponse }),
        __metadata("design:type", Array)
    ], GetAllProductsInPosResponse.prototype, "productResponses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllProductsInPosResponse.prototype, "statusCode", void 0);
    return GetAllProductsInPosResponse;
}(SpeakeasyBase));
export { GetAllProductsInPosResponse };
