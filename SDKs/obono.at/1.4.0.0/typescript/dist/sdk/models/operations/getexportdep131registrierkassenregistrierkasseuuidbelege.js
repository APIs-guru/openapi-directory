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
var GetExportDep131RegistrierkassenRegistrierkasseUuidBelegePathParams = /** @class */ (function (_super) {
    __extends(GetExportDep131RegistrierkassenRegistrierkasseUuidBelegePathParams, _super);
    function GetExportDep131RegistrierkassenRegistrierkasseUuidBelegePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" }),
        __metadata("design:type", String)
    ], GetExportDep131RegistrierkassenRegistrierkasseUuidBelegePathParams.prototype, "registrierkasseUuid", void 0);
    return GetExportDep131RegistrierkassenRegistrierkasseUuidBelegePathParams;
}(SpeakeasyBase));
export { GetExportDep131RegistrierkassenRegistrierkasseUuidBelegePathParams };
var GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams = /** @class */ (function (_super) {
    __extends(GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams, _super);
    function GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams.prototype, "after", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams.prototype, "before", void 0);
    return GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}(SpeakeasyBase));
export { GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams };
var GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest = /** @class */ (function (_super) {
    __extends(GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest, _super);
    function GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExportDep131RegistrierkassenRegistrierkasseUuidBelegePathParams)
    ], GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeQueryParams)
    ], GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest.prototype, "queryParams", void 0);
    return GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest;
}(SpeakeasyBase));
export { GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest };
var GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse = /** @class */ (function (_super) {
    __extends(GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse, _super);
    function GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse.prototype, "statusCode", void 0);
    return GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse;
}(SpeakeasyBase));
export { GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse };
