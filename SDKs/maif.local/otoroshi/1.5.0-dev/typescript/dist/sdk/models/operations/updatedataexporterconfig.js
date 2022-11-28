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
var UpdateDataExporterConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateDataExporterConfigPathParams, _super);
    function UpdateDataExporterConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataExporterConfigId" }),
        __metadata("design:type", String)
    ], UpdateDataExporterConfigPathParams.prototype, "dataExporterConfigId", void 0);
    return UpdateDataExporterConfigPathParams;
}(SpeakeasyBase));
export { UpdateDataExporterConfigPathParams };
var UpdateDataExporterConfigSecurity = /** @class */ (function (_super) {
    __extends(UpdateDataExporterConfigSecurity, _super);
    function UpdateDataExporterConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], UpdateDataExporterConfigSecurity.prototype, "otoroshiAuth", void 0);
    return UpdateDataExporterConfigSecurity;
}(SpeakeasyBase));
export { UpdateDataExporterConfigSecurity };
var UpdateDataExporterConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateDataExporterConfigRequest, _super);
    function UpdateDataExporterConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDataExporterConfigPathParams)
    ], UpdateDataExporterConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DataExporterConfig)
    ], UpdateDataExporterConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDataExporterConfigSecurity)
    ], UpdateDataExporterConfigRequest.prototype, "security", void 0);
    return UpdateDataExporterConfigRequest;
}(SpeakeasyBase));
export { UpdateDataExporterConfigRequest };
var UpdateDataExporterConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateDataExporterConfigResponse, _super);
    function UpdateDataExporterConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDataExporterConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DataExporterConfig)
    ], UpdateDataExporterConfigResponse.prototype, "dataExporterConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDataExporterConfigResponse.prototype, "statusCode", void 0);
    return UpdateDataExporterConfigResponse;
}(SpeakeasyBase));
export { UpdateDataExporterConfigResponse };
