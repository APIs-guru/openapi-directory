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
var GetConsumerV1ServicegroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicegroupsQueryParams, _super);
    function GetConsumerV1ServicegroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicegroupsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetConsumerV1ServicegroupsQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicegroupsQueryParams.prototype, "offset", void 0);
    return GetConsumerV1ServicegroupsQueryParams;
}(SpeakeasyBase));
export { GetConsumerV1ServicegroupsQueryParams };
var GetConsumerV1ServicegroupsRequest = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicegroupsRequest, _super);
    function GetConsumerV1ServicegroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConsumerV1ServicegroupsQueryParams)
    ], GetConsumerV1ServicegroupsRequest.prototype, "queryParams", void 0);
    return GetConsumerV1ServicegroupsRequest;
}(SpeakeasyBase));
export { GetConsumerV1ServicegroupsRequest };
var GetConsumerV1ServicegroupsResponse = /** @class */ (function (_super) {
    __extends(GetConsumerV1ServicegroupsResponse, _super);
    function GetConsumerV1ServicegroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConsumerV1ServicegroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetConsumerV1ServicegroupsResponse.prototype, "serviceGroupListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConsumerV1ServicegroupsResponse.prototype, "statusCode", void 0);
    return GetConsumerV1ServicegroupsResponse;
}(SpeakeasyBase));
export { GetConsumerV1ServicegroupsResponse };
