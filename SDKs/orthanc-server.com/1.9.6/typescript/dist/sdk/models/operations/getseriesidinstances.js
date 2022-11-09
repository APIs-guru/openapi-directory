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
var GetSeriesIdInstancesPathParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdInstancesPathParams, _super);
    function GetSeriesIdInstancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSeriesIdInstancesPathParams.prototype, "id", void 0);
    return GetSeriesIdInstancesPathParams;
}(SpeakeasyBase));
export { GetSeriesIdInstancesPathParams };
var GetSeriesIdInstancesQueryParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdInstancesQueryParams, _super);
    function GetSeriesIdInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=full" }),
        __metadata("design:type", Boolean)
    ], GetSeriesIdInstancesQueryParams.prototype, "full", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetSeriesIdInstancesQueryParams.prototype, "short", void 0);
    return GetSeriesIdInstancesQueryParams;
}(SpeakeasyBase));
export { GetSeriesIdInstancesQueryParams };
var GetSeriesIdInstancesRequest = /** @class */ (function (_super) {
    __extends(GetSeriesIdInstancesRequest, _super);
    function GetSeriesIdInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSeriesIdInstancesPathParams)
    ], GetSeriesIdInstancesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSeriesIdInstancesQueryParams)
    ], GetSeriesIdInstancesRequest.prototype, "queryParams", void 0);
    return GetSeriesIdInstancesRequest;
}(SpeakeasyBase));
export { GetSeriesIdInstancesRequest };
var GetSeriesIdInstancesResponse = /** @class */ (function (_super) {
    __extends(GetSeriesIdInstancesResponse, _super);
    function GetSeriesIdInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSeriesIdInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetSeriesIdInstancesResponse.prototype, "getSeriesIdInstances200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSeriesIdInstancesResponse.prototype, "statusCode", void 0);
    return GetSeriesIdInstancesResponse;
}(SpeakeasyBase));
export { GetSeriesIdInstancesResponse };
