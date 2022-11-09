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
var GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams = /** @class */ (function (_super) {
    __extends(GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams, _super);
    function GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" }),
        __metadata("design:type", String)
    ], GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams.prototype, "registrierkasseUuid", void 0);
    return GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams;
}(SpeakeasyBase));
export { GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams };
var GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams = /** @class */ (function (_super) {
    __extends(GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams, _super);
    function GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=after" }),
        __metadata("design:type", String)
    ], GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams.prototype, "after", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams.prototype, "before", void 0);
    return GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams;
}(SpeakeasyBase));
export { GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams };
var GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest = /** @class */ (function (_super) {
    __extends(GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest, _super);
    function GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetExportDep7RegistrierkassenRegistrierkasseUuidBelegePathParams)
    ], GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeQueryParams)
    ], GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest.prototype, "queryParams", void 0);
    return GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest;
}(SpeakeasyBase));
export { GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest };
var GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse = /** @class */ (function (_super) {
    __extends(GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse, _super);
    function GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse.prototype, "statusCode", void 0);
    return GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse;
}(SpeakeasyBase));
export { GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse };
