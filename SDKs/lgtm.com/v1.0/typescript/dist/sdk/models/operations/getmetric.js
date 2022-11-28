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
var GetMetricPathParams = /** @class */ (function (_super) {
    __extends(GetMetricPathParams, _super);
    function GetMetricPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metric-id" }),
        __metadata("design:type", String)
    ], GetMetricPathParams.prototype, "metricId", void 0);
    return GetMetricPathParams;
}(SpeakeasyBase));
export { GetMetricPathParams };
var GetMetricSecurity = /** @class */ (function (_super) {
    __extends(GetMetricSecurity, _super);
    function GetMetricSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], GetMetricSecurity.prototype, "accessToken", void 0);
    return GetMetricSecurity;
}(SpeakeasyBase));
export { GetMetricSecurity };
var GetMetricRequest = /** @class */ (function (_super) {
    __extends(GetMetricRequest, _super);
    function GetMetricRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMetricPathParams)
    ], GetMetricRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMetricSecurity)
    ], GetMetricRequest.prototype, "security", void 0);
    return GetMetricRequest;
}(SpeakeasyBase));
export { GetMetricRequest };
var GetMetricResponse = /** @class */ (function (_super) {
    __extends(GetMetricResponse, _super);
    function GetMetricResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMetricResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMetricResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Metric)
    ], GetMetricResponse.prototype, "metric", void 0);
    return GetMetricResponse;
}(SpeakeasyBase));
export { GetMetricResponse };
