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
var AquiferCodesWaterUseListQueryParams = /** @class */ (function (_super) {
    __extends(AquiferCodesWaterUseListQueryParams, _super);
    function AquiferCodesWaterUseListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AquiferCodesWaterUseListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], AquiferCodesWaterUseListQueryParams.prototype, "offset", void 0);
    return AquiferCodesWaterUseListQueryParams;
}(SpeakeasyBase));
export { AquiferCodesWaterUseListQueryParams };
var AquiferCodesWaterUseList200ApplicationJson = /** @class */ (function (_super) {
    __extends(AquiferCodesWaterUseList200ApplicationJson, _super);
    function AquiferCodesWaterUseList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], AquiferCodesWaterUseList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], AquiferCodesWaterUseList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], AquiferCodesWaterUseList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.WaterUse }),
        __metadata("design:type", Array)
    ], AquiferCodesWaterUseList200ApplicationJson.prototype, "results", void 0);
    return AquiferCodesWaterUseList200ApplicationJson;
}(SpeakeasyBase));
export { AquiferCodesWaterUseList200ApplicationJson };
var AquiferCodesWaterUseListRequest = /** @class */ (function (_super) {
    __extends(AquiferCodesWaterUseListRequest, _super);
    function AquiferCodesWaterUseListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AquiferCodesWaterUseListQueryParams)
    ], AquiferCodesWaterUseListRequest.prototype, "queryParams", void 0);
    return AquiferCodesWaterUseListRequest;
}(SpeakeasyBase));
export { AquiferCodesWaterUseListRequest };
var AquiferCodesWaterUseListResponse = /** @class */ (function (_super) {
    __extends(AquiferCodesWaterUseListResponse, _super);
    function AquiferCodesWaterUseListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AquiferCodesWaterUseListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AquiferCodesWaterUseListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AquiferCodesWaterUseList200ApplicationJson)
    ], AquiferCodesWaterUseListResponse.prototype, "aquiferCodesWaterUseList200ApplicationJsonObject", void 0);
    return AquiferCodesWaterUseListResponse;
}(SpeakeasyBase));
export { AquiferCodesWaterUseListResponse };
