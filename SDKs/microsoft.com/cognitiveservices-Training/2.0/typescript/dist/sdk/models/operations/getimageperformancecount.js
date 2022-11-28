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
var GetImagePerformanceCountPathParams = /** @class */ (function (_super) {
    __extends(GetImagePerformanceCountPathParams, _super);
    function GetImagePerformanceCountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" }),
        __metadata("design:type", String)
    ], GetImagePerformanceCountPathParams.prototype, "iterationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], GetImagePerformanceCountPathParams.prototype, "projectId", void 0);
    return GetImagePerformanceCountPathParams;
}(SpeakeasyBase));
export { GetImagePerformanceCountPathParams };
var GetImagePerformanceCountQueryParams = /** @class */ (function (_super) {
    __extends(GetImagePerformanceCountQueryParams, _super);
    function GetImagePerformanceCountQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" }),
        __metadata("design:type", Array)
    ], GetImagePerformanceCountQueryParams.prototype, "tagIds", void 0);
    return GetImagePerformanceCountQueryParams;
}(SpeakeasyBase));
export { GetImagePerformanceCountQueryParams };
var GetImagePerformanceCountHeaders = /** @class */ (function (_super) {
    __extends(GetImagePerformanceCountHeaders, _super);
    function GetImagePerformanceCountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], GetImagePerformanceCountHeaders.prototype, "trainingKey", void 0);
    return GetImagePerformanceCountHeaders;
}(SpeakeasyBase));
export { GetImagePerformanceCountHeaders };
var GetImagePerformanceCountRequest = /** @class */ (function (_super) {
    __extends(GetImagePerformanceCountRequest, _super);
    function GetImagePerformanceCountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagePerformanceCountPathParams)
    ], GetImagePerformanceCountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagePerformanceCountQueryParams)
    ], GetImagePerformanceCountRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagePerformanceCountHeaders)
    ], GetImagePerformanceCountRequest.prototype, "headers", void 0);
    return GetImagePerformanceCountRequest;
}(SpeakeasyBase));
export { GetImagePerformanceCountRequest };
var GetImagePerformanceCountResponse = /** @class */ (function (_super) {
    __extends(GetImagePerformanceCountResponse, _super);
    function GetImagePerformanceCountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetImagePerformanceCountResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetImagePerformanceCountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetImagePerformanceCountResponse.prototype, "getImagePerformanceCount200ApplicationJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetImagePerformanceCountResponse.prototype, "getImagePerformanceCount200TextJsonInt32Integer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetImagePerformanceCountResponse.prototype, "statusCode", void 0);
    return GetImagePerformanceCountResponse;
}(SpeakeasyBase));
export { GetImagePerformanceCountResponse };
