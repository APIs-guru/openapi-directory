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
var GetConsumerV1ServicesIdResourcesPathParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicesIdResourcesPathParams, _super);
    function GetConsumerV1ServicesIdResourcesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetConsumerV1ServicesIdResourcesPathParams.prototype, "id", void 0);
    return GetConsumerV1ServicesIdResourcesPathParams;
}(SpeakeasyBase));
export { GetConsumerV1ServicesIdResourcesPathParams };
var GetConsumerV1ServicesIdResourcesQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicesIdResourcesQueryParams, _super);
    function GetConsumerV1ServicesIdResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicesIdResourcesQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1ServicesIdResourcesQueryParams.prototype, "locationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicesIdResourcesQueryParams.prototype, "offset", void 0);
    return GetConsumerV1ServicesIdResourcesQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1ServicesIdResourcesQueryParams };
var GetConsumerV1ServicesIdResourcesRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicesIdResourcesRequest, _super);
    function GetConsumerV1ServicesIdResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetConsumerV1ServicesIdResourcesPathParams)
    ], GetConsumerV1ServicesIdResourcesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetConsumerV1ServicesIdResourcesQueryParams)
    ], GetConsumerV1ServicesIdResourcesRequest.prototype, "queryParams", void 0);
    return GetConsumerV1ServicesIdResourcesRequest;
}(SpeakeasyBase));
export { GetConsumerV1ServicesIdResourcesRequest };
var GetConsumerV1ServicesIdResourcesResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicesIdResourcesResponse, _super);
    function GetConsumerV1ServicesIdResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetConsumerV1ServicesIdResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetConsumerV1ServicesIdResourcesResponse.prototype, "resourceListViewModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicesIdResourcesResponse.prototype, "statusCode", void 0);
    return GetConsumerV1ServicesIdResourcesResponse;
}(SpeakeasyBase));
export { GetConsumerV1ServicesIdResourcesResponse };
