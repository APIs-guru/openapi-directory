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
var GetNumberInsightAdvancedPathParams = /** @class */ (function (_super) {
    __extends(GetNumberInsightAdvancedPathParams, _super);
    function GetNumberInsightAdvancedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetNumberInsightAdvancedPathParams.prototype, "format", void 0);
    return GetNumberInsightAdvancedPathParams;
}(SpeakeasyBase));
export { GetNumberInsightAdvancedPathParams };
var GetNumberInsightAdvancedQueryParams = /** @class */ (function (_super) {
    __extends(GetNumberInsightAdvancedQueryParams, _super);
    function GetNumberInsightAdvancedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cnam" }),
        __metadata("design:type", Boolean)
    ], GetNumberInsightAdvancedQueryParams.prototype, "cnam", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetNumberInsightAdvancedQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" }),
        __metadata("design:type", String)
    ], GetNumberInsightAdvancedQueryParams.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", String)
    ], GetNumberInsightAdvancedQueryParams.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=real_time_data" }),
        __metadata("design:type", Boolean)
    ], GetNumberInsightAdvancedQueryParams.prototype, "realTimeData", void 0);
    return GetNumberInsightAdvancedQueryParams;
}(SpeakeasyBase));
export { GetNumberInsightAdvancedQueryParams };
var GetNumberInsightAdvancedRequest = /** @class */ (function (_super) {
    __extends(GetNumberInsightAdvancedRequest, _super);
    function GetNumberInsightAdvancedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNumberInsightAdvancedPathParams)
    ], GetNumberInsightAdvancedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNumberInsightAdvancedQueryParams)
    ], GetNumberInsightAdvancedRequest.prototype, "queryParams", void 0);
    return GetNumberInsightAdvancedRequest;
}(SpeakeasyBase));
export { GetNumberInsightAdvancedRequest };
var GetNumberInsightAdvancedResponse = /** @class */ (function (_super) {
    __extends(GetNumberInsightAdvancedResponse, _super);
    function GetNumberInsightAdvancedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetNumberInsightAdvancedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNumberInsightAdvancedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNumberInsightAdvancedResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetNumberInsightAdvancedResponse.prototype, "getNumberInsightAdvanced200ApplicationJsonOneOf", void 0);
    return GetNumberInsightAdvancedResponse;
}(SpeakeasyBase));
export { GetNumberInsightAdvancedResponse };
