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
var GetApiVVersionMetalsBenchmarkSummaryPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkSummaryPathParams, _super);
    function GetApiVVersionMetalsBenchmarkSummaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkSummaryPathParams.prototype, "version", void 0);
    return GetApiVVersionMetalsBenchmarkSummaryPathParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkSummaryPathParams };
var GetApiVVersionMetalsBenchmarkSummaryQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkSummaryQueryParams, _super);
    function GetApiVVersionMetalsBenchmarkSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkSummaryQueryParams.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkSummaryQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=metals" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkSummaryQueryParams.prototype, "metals", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkSummaryQueryParams.prototype, "token", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unitofmeasure" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkSummaryQueryParams.prototype, "unitofmeasure", void 0);
    return GetApiVVersionMetalsBenchmarkSummaryQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkSummaryQueryParams };
var GetApiVVersionMetalsBenchmarkSummaryRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkSummaryRequest, _super);
    function GetApiVVersionMetalsBenchmarkSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsBenchmarkSummaryPathParams)
    ], GetApiVVersionMetalsBenchmarkSummaryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsBenchmarkSummaryQueryParams)
    ], GetApiVVersionMetalsBenchmarkSummaryRequest.prototype, "queryParams", void 0);
    return GetApiVVersionMetalsBenchmarkSummaryRequest;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkSummaryRequest };
var GetApiVVersionMetalsBenchmarkSummaryResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkSummaryResponse, _super);
    function GetApiVVersionMetalsBenchmarkSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionMetalsBenchmarkSummaryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionMetalsBenchmarkSummaryResponse.prototype, "problemDetails", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionMetalsBenchmarkSummaryResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.SummaryResponse }),
        __metadata("design:type", Array)
    ], GetApiVVersionMetalsBenchmarkSummaryResponse.prototype, "summaryResponses", void 0);
    return GetApiVVersionMetalsBenchmarkSummaryResponse;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkSummaryResponse };
