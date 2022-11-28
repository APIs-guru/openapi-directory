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
var GetIterationPerformancePathParams = /** @class */ (function (_super) {
    __extends(GetIterationPerformancePathParams, _super);
    function GetIterationPerformancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iterationId" }),
        __metadata("design:type", String)
    ], GetIterationPerformancePathParams.prototype, "iterationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], GetIterationPerformancePathParams.prototype, "projectId", void 0);
    return GetIterationPerformancePathParams;
}(SpeakeasyBase));
export { GetIterationPerformancePathParams };
var GetIterationPerformanceQueryParams = /** @class */ (function (_super) {
    __extends(GetIterationPerformanceQueryParams, _super);
    function GetIterationPerformanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=threshold" }),
        __metadata("design:type", Number)
    ], GetIterationPerformanceQueryParams.prototype, "threshold", void 0);
    return GetIterationPerformanceQueryParams;
}(SpeakeasyBase));
export { GetIterationPerformanceQueryParams };
var GetIterationPerformanceHeaders = /** @class */ (function (_super) {
    __extends(GetIterationPerformanceHeaders, _super);
    function GetIterationPerformanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], GetIterationPerformanceHeaders.prototype, "trainingKey", void 0);
    return GetIterationPerformanceHeaders;
}(SpeakeasyBase));
export { GetIterationPerformanceHeaders };
var GetIterationPerformanceRequest = /** @class */ (function (_super) {
    __extends(GetIterationPerformanceRequest, _super);
    function GetIterationPerformanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIterationPerformancePathParams)
    ], GetIterationPerformanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIterationPerformanceQueryParams)
    ], GetIterationPerformanceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIterationPerformanceHeaders)
    ], GetIterationPerformanceRequest.prototype, "headers", void 0);
    return GetIterationPerformanceRequest;
}(SpeakeasyBase));
export { GetIterationPerformanceRequest };
var GetIterationPerformanceResponse = /** @class */ (function (_super) {
    __extends(GetIterationPerformanceResponse, _super);
    function GetIterationPerformanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetIterationPerformanceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIterationPerformanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IterationPerformance)
    ], GetIterationPerformanceResponse.prototype, "iterationPerformance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIterationPerformanceResponse.prototype, "statusCode", void 0);
    return GetIterationPerformanceResponse;
}(SpeakeasyBase));
export { GetIterationPerformanceResponse };
