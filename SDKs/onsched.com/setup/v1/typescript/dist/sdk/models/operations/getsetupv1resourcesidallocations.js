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
var GetSetupV1ResourcesIdAllocationsPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcesIdAllocationsPathParams, _super);
    function GetSetupV1ResourcesIdAllocationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesIdAllocationsPathParams.prototype, "id", void 0);
    return GetSetupV1ResourcesIdAllocationsPathParams;
}(SpeakeasyBase));
export { GetSetupV1ResourcesIdAllocationsPathParams };
var GetSetupV1ResourcesIdAllocationsQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcesIdAllocationsQueryParams, _super);
    function GetSetupV1ResourcesIdAllocationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], GetSetupV1ResourcesIdAllocationsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1ResourcesIdAllocationsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1ResourcesIdAllocationsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], GetSetupV1ResourcesIdAllocationsQueryParams.prototype, "startDate", void 0);
    return GetSetupV1ResourcesIdAllocationsQueryParams;
}(SpeakeasyBase));
export { GetSetupV1ResourcesIdAllocationsQueryParams };
var GetSetupV1ResourcesIdAllocationsRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcesIdAllocationsRequest, _super);
    function GetSetupV1ResourcesIdAllocationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ResourcesIdAllocationsPathParams)
    ], GetSetupV1ResourcesIdAllocationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ResourcesIdAllocationsQueryParams)
    ], GetSetupV1ResourcesIdAllocationsRequest.prototype, "queryParams", void 0);
    return GetSetupV1ResourcesIdAllocationsRequest;
}(SpeakeasyBase));
export { GetSetupV1ResourcesIdAllocationsRequest };
var GetSetupV1ResourcesIdAllocationsResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1ResourcesIdAllocationsResponse, _super);
    function GetSetupV1ResourcesIdAllocationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1ResourcesIdAllocationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSetupV1ResourcesIdAllocationsResponse.prototype, "resourceAllocationListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1ResourcesIdAllocationsResponse.prototype, "statusCode", void 0);
    return GetSetupV1ResourcesIdAllocationsResponse;
}(SpeakeasyBase));
export { GetSetupV1ResourcesIdAllocationsResponse };
