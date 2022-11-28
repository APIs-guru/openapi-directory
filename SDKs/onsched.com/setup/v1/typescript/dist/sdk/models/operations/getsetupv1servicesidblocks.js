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
var GetSetupV1ServicesIdBlocksPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdBlocksPathParams, _super);
    function GetSetupV1ServicesIdBlocksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSetupV1ServicesIdBlocksPathParams.prototype, "id", void 0);
    return GetSetupV1ServicesIdBlocksPathParams;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdBlocksPathParams };
var GetSetupV1ServicesIdBlocksQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdBlocksQueryParams, _super);
    function GetSetupV1ServicesIdBlocksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], GetSetupV1ServicesIdBlocksQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1ServicesIdBlocksQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1ServicesIdBlocksQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], GetSetupV1ServicesIdBlocksQueryParams.prototype, "startDate", void 0);
    return GetSetupV1ServicesIdBlocksQueryParams;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdBlocksQueryParams };
var GetSetupV1ServicesIdBlocksRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdBlocksRequest, _super);
    function GetSetupV1ServicesIdBlocksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ServicesIdBlocksPathParams)
    ], GetSetupV1ServicesIdBlocksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1ServicesIdBlocksQueryParams)
    ], GetSetupV1ServicesIdBlocksRequest.prototype, "queryParams", void 0);
    return GetSetupV1ServicesIdBlocksRequest;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdBlocksRequest };
var GetSetupV1ServicesIdBlocksResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1ServicesIdBlocksResponse, _super);
    function GetSetupV1ServicesIdBlocksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1ServicesIdBlocksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSetupV1ServicesIdBlocksResponse.prototype, "serviceBlockListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1ServicesIdBlocksResponse.prototype, "statusCode", void 0);
    return GetSetupV1ServicesIdBlocksResponse;
}(SpeakeasyBase));
export { GetSetupV1ServicesIdBlocksResponse };
