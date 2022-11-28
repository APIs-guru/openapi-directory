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
import * as shared from "../shared";
var GetImagePerformancesPathParams = /** @class */ (function (_super) {
    __extends(GetImagePerformancesPathParams, _super);
    function GetImagePerformancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" }),
        __metadata("design:type", String)
    ], GetImagePerformancesPathParams.prototype, "iterationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], GetImagePerformancesPathParams.prototype, "projectId", void 0);
    return GetImagePerformancesPathParams;
}(SpeakeasyBase));
export { GetImagePerformancesPathParams };
export var GetImagePerformancesOrderByEnum;
(function (GetImagePerformancesOrderByEnum) {
    GetImagePerformancesOrderByEnum["Newest"] = "Newest";
    GetImagePerformancesOrderByEnum["Oldest"] = "Oldest";
})(GetImagePerformancesOrderByEnum || (GetImagePerformancesOrderByEnum = {}));
var GetImagePerformancesQueryParams = /** @class */ (function (_super) {
    __extends(GetImagePerformancesQueryParams, _super);
    function GetImagePerformancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], GetImagePerformancesQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetImagePerformancesQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" }),
        __metadata("design:type", Array)
    ], GetImagePerformancesQueryParams.prototype, "tagIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" }),
        __metadata("design:type", Number)
    ], GetImagePerformancesQueryParams.prototype, "take", void 0);
    return GetImagePerformancesQueryParams;
}(SpeakeasyBase));
export { GetImagePerformancesQueryParams };
var GetImagePerformancesHeaders = /** @class */ (function (_super) {
    __extends(GetImagePerformancesHeaders, _super);
    function GetImagePerformancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], GetImagePerformancesHeaders.prototype, "trainingKey", void 0);
    return GetImagePerformancesHeaders;
}(SpeakeasyBase));
export { GetImagePerformancesHeaders };
var GetImagePerformancesRequest = /** @class */ (function (_super) {
    __extends(GetImagePerformancesRequest, _super);
    function GetImagePerformancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagePerformancesPathParams)
    ], GetImagePerformancesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagePerformancesQueryParams)
    ], GetImagePerformancesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagePerformancesHeaders)
    ], GetImagePerformancesRequest.prototype, "headers", void 0);
    return GetImagePerformancesRequest;
}(SpeakeasyBase));
export { GetImagePerformancesRequest };
var GetImagePerformancesResponse = /** @class */ (function (_super) {
    __extends(GetImagePerformancesResponse, _super);
    function GetImagePerformancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetImagePerformancesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetImagePerformancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ImagePerformance }),
        __metadata("design:type", Array)
    ], GetImagePerformancesResponse.prototype, "imagePerformances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetImagePerformancesResponse.prototype, "statusCode", void 0);
    return GetImagePerformancesResponse;
}(SpeakeasyBase));
export { GetImagePerformancesResponse };
