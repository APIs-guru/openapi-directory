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
var AquiferCodesQualityConcernsListQueryParams = /** @class */ (function (_super) {
    __extends(AquiferCodesQualityConcernsListQueryParams, _super);
    function AquiferCodesQualityConcernsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AquiferCodesQualityConcernsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], AquiferCodesQualityConcernsListQueryParams.prototype, "offset", void 0);
    return AquiferCodesQualityConcernsListQueryParams;
}(SpeakeasyBase));
export { AquiferCodesQualityConcernsListQueryParams };
var AquiferCodesQualityConcernsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(AquiferCodesQualityConcernsList200ApplicationJson, _super);
    function AquiferCodesQualityConcernsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], AquiferCodesQualityConcernsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], AquiferCodesQualityConcernsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], AquiferCodesQualityConcernsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.QualityConcern }),
        __metadata("design:type", Array)
    ], AquiferCodesQualityConcernsList200ApplicationJson.prototype, "results", void 0);
    return AquiferCodesQualityConcernsList200ApplicationJson;
}(SpeakeasyBase));
export { AquiferCodesQualityConcernsList200ApplicationJson };
var AquiferCodesQualityConcernsListRequest = /** @class */ (function (_super) {
    __extends(AquiferCodesQualityConcernsListRequest, _super);
    function AquiferCodesQualityConcernsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AquiferCodesQualityConcernsListQueryParams)
    ], AquiferCodesQualityConcernsListRequest.prototype, "queryParams", void 0);
    return AquiferCodesQualityConcernsListRequest;
}(SpeakeasyBase));
export { AquiferCodesQualityConcernsListRequest };
var AquiferCodesQualityConcernsListResponse = /** @class */ (function (_super) {
    __extends(AquiferCodesQualityConcernsListResponse, _super);
    function AquiferCodesQualityConcernsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AquiferCodesQualityConcernsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AquiferCodesQualityConcernsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AquiferCodesQualityConcernsList200ApplicationJson)
    ], AquiferCodesQualityConcernsListResponse.prototype, "aquiferCodesQualityConcernsList200ApplicationJsonObject", void 0);
    return AquiferCodesQualityConcernsListResponse;
}(SpeakeasyBase));
export { AquiferCodesQualityConcernsListResponse };
