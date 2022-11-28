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
var GetSetupV1ServicesIdAllocationsPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdAllocationsPathParams, _super);
    function GetSetupV1ServicesIdAllocationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSetupV1ServicesIdAllocationsPathParams.prototype, "id", void 0);
    return GetSetupV1ServicesIdAllocationsPathParams;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdAllocationsPathParams };
var GetSetupV1ServicesIdAllocationsQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdAllocationsQueryParams, _super);
    function GetSetupV1ServicesIdAllocationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], GetSetupV1ServicesIdAllocationsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1ServicesIdAllocationsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetSetupV1ServicesIdAllocationsQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1ServicesIdAllocationsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceId" }),
        __metadata("design:type", String)
    ], GetSetupV1ServicesIdAllocationsQueryParams.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], GetSetupV1ServicesIdAllocationsQueryParams.prototype, "startDate", void 0);
    return GetSetupV1ServicesIdAllocationsQueryParams;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdAllocationsQueryParams };
var GetSetupV1ServicesIdAllocationsRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdAllocationsRequest, _super);
    function GetSetupV1ServicesIdAllocationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ServicesIdAllocationsPathParams)
    ], GetSetupV1ServicesIdAllocationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ServicesIdAllocationsQueryParams)
    ], GetSetupV1ServicesIdAllocationsRequest.prototype, "queryParams", void 0);
    return GetSetupV1ServicesIdAllocationsRequest;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdAllocationsRequest };
var GetSetupV1ServicesIdAllocationsResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdAllocationsResponse, _super);
    function GetSetupV1ServicesIdAllocationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1ServicesIdAllocationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSetupV1ServicesIdAllocationsResponse.prototype, "serviceAllocationListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1ServicesIdAllocationsResponse.prototype, "statusCode", void 0);
    return GetSetupV1ServicesIdAllocationsResponse;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdAllocationsResponse };
