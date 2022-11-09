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
var GetExportThermalPrintBelegeBelegUuidPathParams = /** @class */ (function (_super) {
    __extends(GetExportThermalPrintBelegeBelegUuidPathParams, _super);
    function GetExportThermalPrintBelegeBelegUuidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" }),
        __metadata("design:type", String)
    ], GetExportThermalPrintBelegeBelegUuidPathParams.prototype, "belegUuid", void 0);
    return GetExportThermalPrintBelegeBelegUuidPathParams;
}(SpeakeasyBase));
export { GetExportThermalPrintBelegeBelegUuidPathParams };
export var GetExportThermalPrintBelegeBelegUuidDialectEnum;
(function (GetExportThermalPrintBelegeBelegUuidDialectEnum) {
    GetExportThermalPrintBelegeBelegUuidDialectEnum["Escpos"] = "escpos";
    GetExportThermalPrintBelegeBelegUuidDialectEnum["Escposlite"] = "escposlite";
    GetExportThermalPrintBelegeBelegUuidDialectEnum["Star"] = "star";
    GetExportThermalPrintBelegeBelegUuidDialectEnum["Text"] = "text";
})(GetExportThermalPrintBelegeBelegUuidDialectEnum || (GetExportThermalPrintBelegeBelegUuidDialectEnum = {}));
export var GetExportThermalPrintBelegeBelegUuidEncodingEnum;
(function (GetExportThermalPrintBelegeBelegUuidEncodingEnum) {
    GetExportThermalPrintBelegeBelegUuidEncodingEnum["Raw"] = "raw";
    GetExportThermalPrintBelegeBelegUuidEncodingEnum["Base64"] = "base64";
})(GetExportThermalPrintBelegeBelegUuidEncodingEnum || (GetExportThermalPrintBelegeBelegUuidEncodingEnum = {}));
var GetExportThermalPrintBelegeBelegUuidQueryParams = /** @class */ (function (_super) {
    __extends(GetExportThermalPrintBelegeBelegUuidQueryParams, _super);
    function GetExportThermalPrintBelegeBelegUuidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dialect" }),
        __metadata("design:type", String)
    ], GetExportThermalPrintBelegeBelegUuidQueryParams.prototype, "dialect", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=encoding" }),
        __metadata("design:type", String)
    ], GetExportThermalPrintBelegeBelegUuidQueryParams.prototype, "encoding", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=qr" }),
        __metadata("design:type", Boolean)
    ], GetExportThermalPrintBelegeBelegUuidQueryParams.prototype, "qr", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetExportThermalPrintBelegeBelegUuidQueryParams.prototype, "width", void 0);
    return GetExportThermalPrintBelegeBelegUuidQueryParams;
}(SpeakeasyBase));
export { GetExportThermalPrintBelegeBelegUuidQueryParams };
var GetExportThermalPrintBelegeBelegUuidRequest = /** @class */ (function (_super) {
    __extends(GetExportThermalPrintBelegeBelegUuidRequest, _super);
    function GetExportThermalPrintBelegeBelegUuidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetExportThermalPrintBelegeBelegUuidPathParams)
    ], GetExportThermalPrintBelegeBelegUuidRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetExportThermalPrintBelegeBelegUuidQueryParams)
    ], GetExportThermalPrintBelegeBelegUuidRequest.prototype, "queryParams", void 0);
    return GetExportThermalPrintBelegeBelegUuidRequest;
}(SpeakeasyBase));
export { GetExportThermalPrintBelegeBelegUuidRequest };
var GetExportThermalPrintBelegeBelegUuidResponse = /** @class */ (function (_super) {
    __extends(GetExportThermalPrintBelegeBelegUuidResponse, _super);
    function GetExportThermalPrintBelegeBelegUuidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetExportThermalPrintBelegeBelegUuidResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetExportThermalPrintBelegeBelegUuidResponse.prototype, "statusCode", void 0);
    return GetExportThermalPrintBelegeBelegUuidResponse;
}(SpeakeasyBase));
export { GetExportThermalPrintBelegeBelegUuidResponse };
