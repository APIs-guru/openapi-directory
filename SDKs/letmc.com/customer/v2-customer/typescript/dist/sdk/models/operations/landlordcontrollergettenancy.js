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
var LandlordControllerGetTenancyPathParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetTenancyPathParams, _super);
    function LandlordControllerGetTenancyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], LandlordControllerGetTenancyPathParams.prototype, "shortName", void 0);
    return LandlordControllerGetTenancyPathParams;
}(SpeakeasyBase));
export { LandlordControllerGetTenancyPathParams };
var LandlordControllerGetTenancyQueryParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetTenancyQueryParams, _super);
    function LandlordControllerGetTenancyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenancyID" }),
        __metadata("design:type", String)
    ], LandlordControllerGetTenancyQueryParams.prototype, "tenancyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], LandlordControllerGetTenancyQueryParams.prototype, "token", void 0);
    return LandlordControllerGetTenancyQueryParams;
}(SpeakeasyBase));
export { LandlordControllerGetTenancyQueryParams };
var LandlordControllerGetTenancyRequest = /** @class */ (function (_super) {
    __extends(LandlordControllerGetTenancyRequest, _super);
    function LandlordControllerGetTenancyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetTenancyPathParams)
    ], LandlordControllerGetTenancyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetTenancyQueryParams)
    ], LandlordControllerGetTenancyRequest.prototype, "queryParams", void 0);
    return LandlordControllerGetTenancyRequest;
}(SpeakeasyBase));
export { LandlordControllerGetTenancyRequest };
var LandlordControllerGetTenancyResponse = /** @class */ (function (_super) {
    __extends(LandlordControllerGetTenancyResponse, _super);
    function LandlordControllerGetTenancyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LandlordControllerGetTenancyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LandlordTenancyModel)
    ], LandlordControllerGetTenancyResponse.prototype, "landlordTenancyModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LandlordControllerGetTenancyResponse.prototype, "statusCode", void 0);
    return LandlordControllerGetTenancyResponse;
}(SpeakeasyBase));
export { LandlordControllerGetTenancyResponse };
