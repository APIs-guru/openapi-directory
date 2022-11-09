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
import * as shared from "../shared";
var GetNumberInsightBasicPathParams = /** @class */ (function (_super) {
    __extends(GetNumberInsightBasicPathParams, _super);
    function GetNumberInsightBasicPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetNumberInsightBasicPathParams.prototype, "format", void 0);
    return GetNumberInsightBasicPathParams;
}(SpeakeasyBase));
export { GetNumberInsightBasicPathParams };
var GetNumberInsightBasicQueryParams = /** @class */ (function (_super) {
    __extends(GetNumberInsightBasicQueryParams, _super);
    function GetNumberInsightBasicQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], GetNumberInsightBasicQueryParams.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", String)
    ], GetNumberInsightBasicQueryParams.prototype, "number", void 0);
    return GetNumberInsightBasicQueryParams;
}(SpeakeasyBase));
export { GetNumberInsightBasicQueryParams };
var GetNumberInsightBasicRequest = /** @class */ (function (_super) {
    __extends(GetNumberInsightBasicRequest, _super);
    function GetNumberInsightBasicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetNumberInsightBasicPathParams)
    ], GetNumberInsightBasicRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetNumberInsightBasicQueryParams)
    ], GetNumberInsightBasicRequest.prototype, "queryParams", void 0);
    return GetNumberInsightBasicRequest;
}(SpeakeasyBase));
export { GetNumberInsightBasicRequest };
var GetNumberInsightBasicResponse = /** @class */ (function (_super) {
    __extends(GetNumberInsightBasicResponse, _super);
    function GetNumberInsightBasicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetNumberInsightBasicResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetNumberInsightBasicResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetNumberInsightBasicResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NiResponseJsonBasic)
    ], GetNumberInsightBasicResponse.prototype, "niResponseJsonBasic", void 0);
    return GetNumberInsightBasicResponse;
}(SpeakeasyBase));
export { GetNumberInsightBasicResponse };
