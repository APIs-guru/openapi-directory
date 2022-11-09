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
var GetApiVVersionMetalsSpotSummaryPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotSummaryPathParams, _super);
    function GetApiVVersionMetalsSpotSummaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotSummaryPathParams.prototype, "version", void 0);
    return GetApiVVersionMetalsSpotSummaryPathParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotSummaryPathParams };
var GetApiVVersionMetalsSpotSummaryQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotSummaryQueryParams, _super);
    function GetApiVVersionMetalsSpotSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotSummaryQueryParams.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotSummaryQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=metals" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotSummaryQueryParams.prototype, "metals", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotSummaryQueryParams.prototype, "token", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unitofmeasure" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotSummaryQueryParams.prototype, "unitofmeasure", void 0);
    return GetApiVVersionMetalsSpotSummaryQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotSummaryQueryParams };
var GetApiVVersionMetalsSpotSummaryRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotSummaryRequest, _super);
    function GetApiVVersionMetalsSpotSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotSummaryPathParams)
    ], GetApiVVersionMetalsSpotSummaryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotSummaryQueryParams)
    ], GetApiVVersionMetalsSpotSummaryRequest.prototype, "queryParams", void 0);
    return GetApiVVersionMetalsSpotSummaryRequest;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotSummaryRequest };
var GetApiVVersionMetalsSpotSummaryResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotSummaryResponse, _super);
    function GetApiVVersionMetalsSpotSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionMetalsSpotSummaryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionMetalsSpotSummaryResponse.prototype, "problemDetails", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionMetalsSpotSummaryResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.SummaryResponse }),
        __metadata("design:type", Array)
    ], GetApiVVersionMetalsSpotSummaryResponse.prototype, "summaryResponses", void 0);
    return GetApiVVersionMetalsSpotSummaryResponse;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotSummaryResponse };
