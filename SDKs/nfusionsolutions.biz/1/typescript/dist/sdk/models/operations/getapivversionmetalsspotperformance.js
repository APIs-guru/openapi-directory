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
var GetApiVVersionMetalsSpotPerformancePathParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotPerformancePathParams, _super);
    function GetApiVVersionMetalsSpotPerformancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformancePathParams.prototype, "version", void 0);
    return GetApiVVersionMetalsSpotPerformancePathParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotPerformancePathParams };
var GetApiVVersionMetalsSpotPerformanceQueryParams = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotPerformanceQueryParams, _super);
    function GetApiVVersionMetalsSpotPerformanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceQueryParams.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metals" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceQueryParams.prototype, "metals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceQueryParams.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unitofmeasure" }),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceQueryParams.prototype, "unitofmeasure", void 0);
    return GetApiVVersionMetalsSpotPerformanceQueryParams;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotPerformanceQueryParams };
var GetApiVVersionMetalsSpotPerformanceRequest = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotPerformanceRequest, _super);
    function GetApiVVersionMetalsSpotPerformanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotPerformancePathParams)
    ], GetApiVVersionMetalsSpotPerformanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiVVersionMetalsSpotPerformanceQueryParams)
    ], GetApiVVersionMetalsSpotPerformanceRequest.prototype, "queryParams", void 0);
    return GetApiVVersionMetalsSpotPerformanceRequest;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotPerformanceRequest };
var GetApiVVersionMetalsSpotPerformanceResponse = /** @class */ (function (_super) {
    __extends(GetApiVVersionMetalsSpotPerformanceResponse, _super);
    function GetApiVVersionMetalsSpotPerformanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiVVersionMetalsSpotPerformanceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiVVersionMetalsSpotPerformanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.IntervalCollectionResponse }),
        __metadata("design:type", Array)
    ], GetApiVVersionMetalsSpotPerformanceResponse.prototype, "intervalCollectionResponses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiVVersionMetalsSpotPerformanceResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiVVersionMetalsSpotPerformanceResponse.prototype, "statusCode", void 0);
    return GetApiVVersionMetalsSpotPerformanceResponse;
}(SpeakeasyBase));
export { GetApiVVersionMetalsSpotPerformanceResponse };
