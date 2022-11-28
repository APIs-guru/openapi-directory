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
var GetSeriesIdSharedTagsPathParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdSharedTagsPathParams, _super);
    function GetSeriesIdSharedTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSeriesIdSharedTagsPathParams.prototype, "id", void 0);
    return GetSeriesIdSharedTagsPathParams;
}(SpeakeasyBase));
export { GetSeriesIdSharedTagsPathParams };
var GetSeriesIdSharedTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdSharedTagsQueryParams, _super);
    function GetSeriesIdSharedTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetSeriesIdSharedTagsQueryParams.prototype, "short", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=simplify" }),
        __metadata("design:type", Boolean)
    ], GetSeriesIdSharedTagsQueryParams.prototype, "simplify", void 0);
    return GetSeriesIdSharedTagsQueryParams;
}(SpeakeasyBase));
export { GetSeriesIdSharedTagsQueryParams };
var GetSeriesIdSharedTagsRequest = /** @class */ (function (_super) {
    __extends(GetSeriesIdSharedTagsRequest, _super);
    function GetSeriesIdSharedTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesIdSharedTagsPathParams)
    ], GetSeriesIdSharedTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesIdSharedTagsQueryParams)
    ], GetSeriesIdSharedTagsRequest.prototype, "queryParams", void 0);
    return GetSeriesIdSharedTagsRequest;
}(SpeakeasyBase));
export { GetSeriesIdSharedTagsRequest };
var GetSeriesIdSharedTagsResponse = /** @class */ (function (_super) {
    __extends(GetSeriesIdSharedTagsResponse, _super);
    function GetSeriesIdSharedTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSeriesIdSharedTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSeriesIdSharedTagsResponse.prototype, "getSeriesIdSharedTags200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSeriesIdSharedTagsResponse.prototype, "statusCode", void 0);
    return GetSeriesIdSharedTagsResponse;
}(SpeakeasyBase));
export { GetSeriesIdSharedTagsResponse };
