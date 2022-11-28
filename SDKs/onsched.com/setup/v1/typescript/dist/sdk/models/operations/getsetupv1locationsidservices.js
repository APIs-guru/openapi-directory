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
var GetSetupV1LocationsIdServicesPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsIdServicesPathParams, _super);
    function GetSetupV1LocationsIdServicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSetupV1LocationsIdServicesPathParams.prototype, "id", void 0);
    return GetSetupV1LocationsIdServicesPathParams;
}(SpeakeasyBase));
export { GetSetupV1LocationsIdServicesPathParams };
var GetSetupV1LocationsIdServicesQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsIdServicesQueryParams, _super);
    function GetSetupV1LocationsIdServicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1LocationsIdServicesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1LocationsIdServicesQueryParams.prototype, "offset", void 0);
    return GetSetupV1LocationsIdServicesQueryParams;
}(SpeakeasyBase));
export { GetSetupV1LocationsIdServicesQueryParams };
var GetSetupV1LocationsIdServicesRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsIdServicesRequest, _super);
    function GetSetupV1LocationsIdServicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1LocationsIdServicesPathParams)
    ], GetSetupV1LocationsIdServicesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1LocationsIdServicesQueryParams)
    ], GetSetupV1LocationsIdServicesRequest.prototype, "queryParams", void 0);
    return GetSetupV1LocationsIdServicesRequest;
}(SpeakeasyBase));
export { GetSetupV1LocationsIdServicesRequest };
var GetSetupV1LocationsIdServicesResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsIdServicesResponse, _super);
    function GetSetupV1LocationsIdServicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSetupV1LocationsIdServicesResponse.prototype, "businessServiceListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1LocationsIdServicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1LocationsIdServicesResponse.prototype, "statusCode", void 0);
    return GetSetupV1LocationsIdServicesResponse;
}(SpeakeasyBase));
export { GetSetupV1LocationsIdServicesResponse };
