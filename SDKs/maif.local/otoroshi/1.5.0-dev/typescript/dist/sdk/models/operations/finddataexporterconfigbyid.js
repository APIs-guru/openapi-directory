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
var FindDataExporterConfigByIdPathParams = /** @class */ (function (_super) {
    __extends(FindDataExporterConfigByIdPathParams, _super);
    function FindDataExporterConfigByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataExporterConfigId" }),
        __metadata("design:type", String)
    ], FindDataExporterConfigByIdPathParams.prototype, "dataExporterConfigId", void 0);
    return FindDataExporterConfigByIdPathParams;
}(SpeakeasyBase));
export { FindDataExporterConfigByIdPathParams };
var FindDataExporterConfigByIdSecurity = /** @class */ (function (_super) {
    __extends(FindDataExporterConfigByIdSecurity, _super);
    function FindDataExporterConfigByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], FindDataExporterConfigByIdSecurity.prototype, "otoroshiAuth", void 0);
    return FindDataExporterConfigByIdSecurity;
}(SpeakeasyBase));
export { FindDataExporterConfigByIdSecurity };
var FindDataExporterConfigByIdRequest = /** @class */ (function (_super) {
    __extends(FindDataExporterConfigByIdRequest, _super);
    function FindDataExporterConfigByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindDataExporterConfigByIdPathParams)
    ], FindDataExporterConfigByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FindDataExporterConfigByIdSecurity)
    ], FindDataExporterConfigByIdRequest.prototype, "security", void 0);
    return FindDataExporterConfigByIdRequest;
}(SpeakeasyBase));
export { FindDataExporterConfigByIdRequest };
var FindDataExporterConfigByIdResponse = /** @class */ (function (_super) {
    __extends(FindDataExporterConfigByIdResponse, _super);
    function FindDataExporterConfigByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FindDataExporterConfigByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DataExporterConfig)
    ], FindDataExporterConfigByIdResponse.prototype, "dataExporterConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FindDataExporterConfigByIdResponse.prototype, "statusCode", void 0);
    return FindDataExporterConfigByIdResponse;
}(SpeakeasyBase));
export { FindDataExporterConfigByIdResponse };
