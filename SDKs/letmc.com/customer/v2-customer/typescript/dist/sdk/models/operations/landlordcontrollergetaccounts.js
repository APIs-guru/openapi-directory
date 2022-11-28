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
var LandlordControllerGetAccountsPathParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetAccountsPathParams, _super);
    function LandlordControllerGetAccountsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], LandlordControllerGetAccountsPathParams.prototype, "shortName", void 0);
    return LandlordControllerGetAccountsPathParams;
}(SpeakeasyBase));
export { LandlordControllerGetAccountsPathParams };
var LandlordControllerGetAccountsQueryParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetAccountsQueryParams, _super);
    function LandlordControllerGetAccountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], LandlordControllerGetAccountsQueryParams.prototype, "token", void 0);
    return LandlordControllerGetAccountsQueryParams;
}(SpeakeasyBase));
export { LandlordControllerGetAccountsQueryParams };
var LandlordControllerGetAccountsRequest = /** @class */ (function (_super) {
    __extends(LandlordControllerGetAccountsRequest, _super);
    function LandlordControllerGetAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetAccountsPathParams)
    ], LandlordControllerGetAccountsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetAccountsQueryParams)
    ], LandlordControllerGetAccountsRequest.prototype, "queryParams", void 0);
    return LandlordControllerGetAccountsRequest;
}(SpeakeasyBase));
export { LandlordControllerGetAccountsRequest };
var LandlordControllerGetAccountsResponse = /** @class */ (function (_super) {
    __extends(LandlordControllerGetAccountsResponse, _super);
    function LandlordControllerGetAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LandlordControllerGetAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LandlordAccountingModel)
    ], LandlordControllerGetAccountsResponse.prototype, "landlordAccountingModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LandlordControllerGetAccountsResponse.prototype, "statusCode", void 0);
    return LandlordControllerGetAccountsResponse;
}(SpeakeasyBase));
export { LandlordControllerGetAccountsResponse };
