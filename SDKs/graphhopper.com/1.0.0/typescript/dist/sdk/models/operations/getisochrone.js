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
export var GetIsochroneWeightingEnum;
(function (GetIsochroneWeightingEnum) {
    GetIsochroneWeightingEnum["Fastest"] = "fastest";
    GetIsochroneWeightingEnum["Shortest"] = "shortest";
})(GetIsochroneWeightingEnum || (GetIsochroneWeightingEnum = {}));
var GetIsochroneQueryParams = /** @class */ (function (_super) {
    __extends(GetIsochroneQueryParams, _super);
    function GetIsochroneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=buckets" }),
        __metadata("design:type", Number)
    ], GetIsochroneQueryParams.prototype, "buckets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distance_limit" }),
        __metadata("design:type", Number)
    ], GetIsochroneQueryParams.prototype, "distanceLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point" }),
        __metadata("design:type", String)
    ], GetIsochroneQueryParams.prototype, "point", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reverse_flow" }),
        __metadata("design:type", Boolean)
    ], GetIsochroneQueryParams.prototype, "reverseFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_limit" }),
        __metadata("design:type", Number)
    ], GetIsochroneQueryParams.prototype, "timeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle" }),
        __metadata("design:type", String)
    ], GetIsochroneQueryParams.prototype, "vehicle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weighting" }),
        __metadata("design:type", String)
    ], GetIsochroneQueryParams.prototype, "weighting", void 0);
    return GetIsochroneQueryParams;
}(SpeakeasyBase));
export { GetIsochroneQueryParams };
var GetIsochroneRequest = /** @class */ (function (_super) {
    __extends(GetIsochroneRequest, _super);
    function GetIsochroneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIsochroneQueryParams)
    ], GetIsochroneRequest.prototype, "queryParams", void 0);
    return GetIsochroneRequest;
}(SpeakeasyBase));
export { GetIsochroneRequest };
var GetIsochroneResponse = /** @class */ (function (_super) {
    __extends(GetIsochroneResponse, _super);
    function GetIsochroneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIsochroneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GhError)
    ], GetIsochroneResponse.prototype, "ghError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IsochroneResponse)
    ], GetIsochroneResponse.prototype, "isochroneResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIsochroneResponse.prototype, "statusCode", void 0);
    return GetIsochroneResponse;
}(SpeakeasyBase));
export { GetIsochroneResponse };
