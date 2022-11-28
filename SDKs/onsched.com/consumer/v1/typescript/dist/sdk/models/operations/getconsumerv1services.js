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
var GetConsumerV1ServicesQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicesQueryParams, _super);
    function GetConsumerV1ServicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allLocations" }),
        __metadata("design:type", Boolean)
    ], GetConsumerV1ServicesQueryParams.prototype, "allLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defaultService" }),
        __metadata("design:type", Boolean)
    ], GetConsumerV1ServicesQueryParams.prototype, "defaultService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1ServicesQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetConsumerV1ServicesQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicesQueryParams.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceGroupId" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicesQueryParams.prototype, "serviceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1ServicesQueryParams.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDescending" }),
        __metadata("design:type", Boolean)
    ], GetConsumerV1ServicesQueryParams.prototype, "sortDescending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicesQueryParams.prototype, "sortOrder", void 0);
    return GetConsumerV1ServicesQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1ServicesQueryParams };
var GetConsumerV1ServicesRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicesRequest, _super);
    function GetConsumerV1ServicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConsumerV1ServicesQueryParams)
    ], GetConsumerV1ServicesRequest.prototype, "queryParams", void 0);
    return GetConsumerV1ServicesRequest;
}(SpeakeasyBase));
export { GetConsumerV1ServicesRequest };
var GetConsumerV1ServicesResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicesResponse, _super);
    function GetConsumerV1ServicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConsumerV1ServicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetConsumerV1ServicesResponse.prototype, "serviceListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicesResponse.prototype, "statusCode", void 0);
    return GetConsumerV1ServicesResponse;
}(SpeakeasyBase));
export { GetConsumerV1ServicesResponse };
