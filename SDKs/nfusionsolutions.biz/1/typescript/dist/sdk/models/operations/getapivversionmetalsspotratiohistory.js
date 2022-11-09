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
var GetApiVVersionMetalsSpotRatioHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotRatioHistoryPathParams, _super);
    function GetApiVVersionMetalsSpotRatioHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotRatioHistoryPathParams.prototype, "version", void 0);
    return GetApiVVersionMetalsSpotRatioHistoryPathParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotRatioHistoryPathParams };
var GetApiVVersionMetalsSpotRatioHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotRatioHistoryQueryParams, _super);
    function GetApiVVersionMetalsSpotRatioHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", Date)
    ], GetApiVVersionMetalsSpotRatioHistoryQueryParams.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotRatioHistoryQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=interval" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotRatioHistoryQueryParams.prototype, "interval", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pairs" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotRatioHistoryQueryParams.prototype, "pairs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Date)
    ], GetApiVVersionMetalsSpotRatioHistoryQueryParams.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotRatioHistoryQueryParams.prototype, "token", void 0);
    return GetApiVVersionMetalsSpotRatioHistoryQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotRatioHistoryQueryParams };
var GetApiVVersionMetalsSpotRatioHistoryRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotRatioHistoryRequest, _super);
    function GetApiVVersionMetalsSpotRatioHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotRatioHistoryPathParams)
    ], GetApiVVersionMetalsSpotRatioHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotRatioHistoryQueryParams)
    ], GetApiVVersionMetalsSpotRatioHistoryRequest.prototype, "queryParams", void 0);
    return GetApiVVersionMetalsSpotRatioHistoryRequest;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotRatioHistoryRequest };
var GetApiVVersionMetalsSpotRatioHistoryResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotRatioHistoryResponse, _super);
    function GetApiVVersionMetalsSpotRatioHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionMetalsSpotRatioHistoryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotRatioHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.IntervalCollectionResponse }),
        __metadata("design:type", Array)
    ], GetApiVVersionMetalsSpotRatioHistoryResponse.prototype, "intervalCollectionResponses", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionMetalsSpotRatioHistoryResponse.prototype, "problemDetails", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionMetalsSpotRatioHistoryResponse.prototype, "statusCode", void 0);
    return GetApiVVersionMetalsSpotRatioHistoryResponse;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotRatioHistoryResponse };
