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
var GetApiVVersionMetalsBenchmarkHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkHistoryPathParams, _super);
    function GetApiVVersionMetalsBenchmarkHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkHistoryPathParams.prototype, "version", void 0);
    return GetApiVVersionMetalsBenchmarkHistoryPathParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkHistoryPathParams };
var GetApiVVersionMetalsBenchmarkHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkHistoryQueryParams, _super);
    function GetApiVVersionMetalsBenchmarkHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkHistoryQueryParams.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Date)
    ], GetApiVVersionMetalsBenchmarkHistoryQueryParams.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkHistoryQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=historicalfx" }),
        __metadata("design:type", Boolean)
    ], GetApiVVersionMetalsBenchmarkHistoryQueryParams.prototype, "historicalfx", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=interval" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkHistoryQueryParams.prototype, "interval", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=metals" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkHistoryQueryParams.prototype, "metals", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Date)
    ], GetApiVVersionMetalsBenchmarkHistoryQueryParams.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkHistoryQueryParams.prototype, "token", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unitofmeasure" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkHistoryQueryParams.prototype, "unitofmeasure", void 0);
    return GetApiVVersionMetalsBenchmarkHistoryQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkHistoryQueryParams };
var GetApiVVersionMetalsBenchmarkHistoryRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkHistoryRequest, _super);
    function GetApiVVersionMetalsBenchmarkHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsBenchmarkHistoryPathParams)
    ], GetApiVVersionMetalsBenchmarkHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsBenchmarkHistoryQueryParams)
    ], GetApiVVersionMetalsBenchmarkHistoryRequest.prototype, "queryParams", void 0);
    return GetApiVVersionMetalsBenchmarkHistoryRequest;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkHistoryRequest };
var GetApiVVersionMetalsBenchmarkHistoryResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsBenchmarkHistoryResponse, _super);
    function GetApiVVersionMetalsBenchmarkHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionMetalsBenchmarkHistoryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsBenchmarkHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.IntervalCollectionResponse }),
        __metadata("design:type", Array)
    ], GetApiVVersionMetalsBenchmarkHistoryResponse.prototype, "intervalCollectionResponses", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionMetalsBenchmarkHistoryResponse.prototype, "problemDetails", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionMetalsBenchmarkHistoryResponse.prototype, "statusCode", void 0);
    return GetApiVVersionMetalsBenchmarkHistoryResponse;
}(SpeakeasyBase));
export { GetApiVVersionMetalsBenchmarkHistoryResponse };
