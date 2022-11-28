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
var AquiferCodesSubtypesListQueryParams = /** @class */ (function (_super) {
    __extends(AquiferCodesSubtypesListQueryParams, _super);
    function AquiferCodesSubtypesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], AquiferCodesSubtypesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], AquiferCodesSubtypesListQueryParams.prototype, "offset", void 0);
    return AquiferCodesSubtypesListQueryParams;
}(SpeakeasyBase));
export { AquiferCodesSubtypesListQueryParams };
var AquiferCodesSubtypesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(AquiferCodesSubtypesList200ApplicationJson, _super);
    function AquiferCodesSubtypesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], AquiferCodesSubtypesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], AquiferCodesSubtypesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], AquiferCodesSubtypesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.AquiferSubtype }),
        __metadata("design:type", Array)
    ], AquiferCodesSubtypesList200ApplicationJson.prototype, "results", void 0);
    return AquiferCodesSubtypesList200ApplicationJson;
}(SpeakeasyBase));
export { AquiferCodesSubtypesList200ApplicationJson };
var AquiferCodesSubtypesListRequest = /** @class */ (function (_super) {
    __extends(AquiferCodesSubtypesListRequest, _super);
    function AquiferCodesSubtypesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AquiferCodesSubtypesListQueryParams)
    ], AquiferCodesSubtypesListRequest.prototype, "queryParams", void 0);
    return AquiferCodesSubtypesListRequest;
}(SpeakeasyBase));
export { AquiferCodesSubtypesListRequest };
var AquiferCodesSubtypesListResponse = /** @class */ (function (_super) {
    __extends(AquiferCodesSubtypesListResponse, _super);
    function AquiferCodesSubtypesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AquiferCodesSubtypesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AquiferCodesSubtypesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AquiferCodesSubtypesList200ApplicationJson)
    ], AquiferCodesSubtypesListResponse.prototype, "aquiferCodesSubtypesList200ApplicationJsonObject", void 0);
    return AquiferCodesSubtypesListResponse;
}(SpeakeasyBase));
export { AquiferCodesSubtypesListResponse };
