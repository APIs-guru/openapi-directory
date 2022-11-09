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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var GetConsumerV1LocationsQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1LocationsQueryParams, _super);
    function GetConsumerV1LocationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ignorePrimary" }),
        __metadata("design:type", Boolean)
    ], GetConsumerV1LocationsQueryParams.prototype, "ignorePrimary", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetConsumerV1LocationsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetConsumerV1LocationsQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nearestTo" }),
        __metadata("design:type", String)
    ], GetConsumerV1LocationsQueryParams.prototype, "nearestTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1LocationsQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=proximity" }),
        __metadata("design:type", Number)
    ], GetConsumerV1LocationsQueryParams.prototype, "proximity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=regionId" }),
        __metadata("design:type", String)
    ], GetConsumerV1LocationsQueryParams.prototype, "regionId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=serviceId" }),
        __metadata("design:type", String)
    ], GetConsumerV1LocationsQueryParams.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=units" }),
        __metadata("design:type", String)
    ], GetConsumerV1LocationsQueryParams.prototype, "units", void 0);
    return GetConsumerV1LocationsQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1LocationsQueryParams };
var GetConsumerV1LocationsRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1LocationsRequest, _super);
    function GetConsumerV1LocationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetConsumerV1LocationsQueryParams)
    ], GetConsumerV1LocationsRequest.prototype, "queryParams", void 0);
    return GetConsumerV1LocationsRequest;
}(SpeakeasyBase));
export { GetConsumerV1LocationsRequest };
var GetConsumerV1LocationsResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1LocationsResponse, _super);
    function GetConsumerV1LocationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetConsumerV1LocationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetConsumerV1LocationsResponse.prototype, "locationListViewModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1LocationsResponse.prototype, "statusCode", void 0);
    return GetConsumerV1LocationsResponse;
}(SpeakeasyBase));
export { GetConsumerV1LocationsResponse };
