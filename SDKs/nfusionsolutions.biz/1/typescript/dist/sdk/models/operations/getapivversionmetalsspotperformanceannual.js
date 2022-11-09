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
var GetApiVVersionMetalsSpotPerformanceAnnualPathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotPerformanceAnnualPathParams, _super);
    function GetApiVVersionMetalsSpotPerformanceAnnualPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceAnnualPathParams.prototype, "version", void 0);
    return GetApiVVersionMetalsSpotPerformanceAnnualPathParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotPerformanceAnnualPathParams };
var GetApiVVersionMetalsSpotPerformanceAnnualQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotPerformanceAnnualQueryParams, _super);
    function GetApiVVersionMetalsSpotPerformanceAnnualQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceAnnualQueryParams.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceAnnualQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=metals" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceAnnualQueryParams.prototype, "metals", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceAnnualQueryParams.prototype, "token", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=unitofmeasure" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceAnnualQueryParams.prototype, "unitofmeasure", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=years" }),
        __metadata("design:type", Number)
    ], GetApiVVersionMetalsSpotPerformanceAnnualQueryParams.prototype, "years", void 0);
    return GetApiVVersionMetalsSpotPerformanceAnnualQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotPerformanceAnnualQueryParams };
var GetApiVVersionMetalsSpotPerformanceAnnualRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotPerformanceAnnualRequest, _super);
    function GetApiVVersionMetalsSpotPerformanceAnnualRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotPerformanceAnnualPathParams)
    ], GetApiVVersionMetalsSpotPerformanceAnnualRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotPerformanceAnnualQueryParams)
    ], GetApiVVersionMetalsSpotPerformanceAnnualRequest.prototype, "queryParams", void 0);
    return GetApiVVersionMetalsSpotPerformanceAnnualRequest;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotPerformanceAnnualRequest };
var GetApiVVersionMetalsSpotPerformanceAnnualResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotPerformanceAnnualResponse, _super);
    function GetApiVVersionMetalsSpotPerformanceAnnualResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionMetalsSpotPerformanceAnnualResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceAnnualResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.IntervalCollectionResponse }),
        __metadata("design:type", Array)
    ], GetApiVVersionMetalsSpotPerformanceAnnualResponse.prototype, "intervalCollectionResponses", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionMetalsSpotPerformanceAnnualResponse.prototype, "problemDetails", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionMetalsSpotPerformanceAnnualResponse.prototype, "statusCode", void 0);
    return GetApiVVersionMetalsSpotPerformanceAnnualResponse;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotPerformanceAnnualResponse };
