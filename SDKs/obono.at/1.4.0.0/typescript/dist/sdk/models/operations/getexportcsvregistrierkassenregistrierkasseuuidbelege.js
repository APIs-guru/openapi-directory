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
var GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams = /** @class */ (function (_super) {
    __extends(GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams, _super);
    function GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" }),
        __metadata("design:type", String)
    ], GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams.prototype, "registrierkasseUuid", void 0);
    return GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams;
}(SpeakeasyBase));
export { GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams };
var GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams = /** @class */ (function (_super) {
    __extends(GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams, _super);
    function GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams.prototype, "before", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=posten" }),
        __metadata("design:type", Boolean)
    ], GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams.prototype, "posten", void 0);
    return GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}(SpeakeasyBase));
export { GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams };
var GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest = /** @class */ (function (_super) {
    __extends(GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest, _super);
    function GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExportCsvRegistrierkassenRegistrierkasseUuidBelegePathParams)
    ], GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeQueryParams)
    ], GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest.prototype, "queryParams", void 0);
    return GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest;
}(SpeakeasyBase));
export { GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest };
var GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse = /** @class */ (function (_super) {
    __extends(GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse, _super);
    function GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse.prototype, "statusCode", void 0);
    return GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse;
}(SpeakeasyBase));
export { GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse };
