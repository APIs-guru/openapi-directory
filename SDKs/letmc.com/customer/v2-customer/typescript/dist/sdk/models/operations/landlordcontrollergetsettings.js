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
var LandlordControllerGetSettingsPathParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetSettingsPathParams, _super);
    function LandlordControllerGetSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], LandlordControllerGetSettingsPathParams.prototype, "shortName", void 0);
    return LandlordControllerGetSettingsPathParams;
}(SpeakeasyBase));
export { LandlordControllerGetSettingsPathParams };
var LandlordControllerGetSettingsQueryParams = /** @class */ (function (_super) {
    __extends(LandlordControllerGetSettingsQueryParams, _super);
    function LandlordControllerGetSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], LandlordControllerGetSettingsQueryParams.prototype, "token", void 0);
    return LandlordControllerGetSettingsQueryParams;
}(SpeakeasyBase));
export { LandlordControllerGetSettingsQueryParams };
var LandlordControllerGetSettingsRequest = /** @class */ (function (_super) {
    __extends(LandlordControllerGetSettingsRequest, _super);
    function LandlordControllerGetSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetSettingsPathParams)
    ], LandlordControllerGetSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LandlordControllerGetSettingsQueryParams)
    ], LandlordControllerGetSettingsRequest.prototype, "queryParams", void 0);
    return LandlordControllerGetSettingsRequest;
}(SpeakeasyBase));
export { LandlordControllerGetSettingsRequest };
var LandlordControllerGetSettingsResponse = /** @class */ (function (_super) {
    __extends(LandlordControllerGetSettingsResponse, _super);
    function LandlordControllerGetSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LandlordControllerGetSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LandlordSettingsModel)
    ], LandlordControllerGetSettingsResponse.prototype, "landlordSettingsModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LandlordControllerGetSettingsResponse.prototype, "statusCode", void 0);
    return LandlordControllerGetSettingsResponse;
}(SpeakeasyBase));
export { LandlordControllerGetSettingsResponse };
