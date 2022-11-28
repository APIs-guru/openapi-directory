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
var LandlordControllerGetRentArrearsPathParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetRentArrearsPathParams, _super);
    function LandlordControllerGetRentArrearsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], LandlordControllerGetRentArrearsPathParams.prototype, "shortName", void 0);
    return LandlordControllerGetRentArrearsPathParams;
}(SpeakeasyBase));
export { LandlordControllerGetRentArrearsPathParams };
var LandlordControllerGetRentArrearsQueryParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetRentArrearsQueryParams, _super);
    function LandlordControllerGetRentArrearsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], LandlordControllerGetRentArrearsQueryParams.prototype, "token", void 0);
    return LandlordControllerGetRentArrearsQueryParams;
}(SpeakeasyBase));
export { LandlordControllerGetRentArrearsQueryParams };
var LandlordControllerGetRentArrearsRequest = /** @class */ (function (_super) {
    __extends(LandlordControllerGetRentArrearsRequest, _super);
    function LandlordControllerGetRentArrearsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetRentArrearsPathParams)
    ], LandlordControllerGetRentArrearsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetRentArrearsQueryParams)
    ], LandlordControllerGetRentArrearsRequest.prototype, "queryParams", void 0);
    return LandlordControllerGetRentArrearsRequest;
}(SpeakeasyBase));
export { LandlordControllerGetRentArrearsRequest };
var LandlordControllerGetRentArrearsResponse = /** @class */ (function (_super) {
    __extends(LandlordControllerGetRentArrearsResponse, _super);
    function LandlordControllerGetRentArrearsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LandlordControllerGetRentArrearsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LandlordRentArrearsModel)
    ], LandlordControllerGetRentArrearsResponse.prototype, "landlordRentArrearsModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LandlordControllerGetRentArrearsResponse.prototype, "statusCode", void 0);
    return LandlordControllerGetRentArrearsResponse;
}(SpeakeasyBase));
export { LandlordControllerGetRentArrearsResponse };
