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
var DeletebulkDataExporterConfigSecurity = /** @class */ (function (_super) {
    __extends(DeletebulkDataExporterConfigSecurity, _super);
    function DeletebulkDataExporterConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], DeletebulkDataExporterConfigSecurity.prototype, "otoroshiAuth", void 0);
    return DeletebulkDataExporterConfigSecurity;
}(SpeakeasyBase));
export { DeletebulkDataExporterConfigSecurity };
export var DeletebulkDataExporterConfig200ApplicationJsonStatusEnum;
(function (DeletebulkDataExporterConfig200ApplicationJsonStatusEnum) {
    DeletebulkDataExporterConfig200ApplicationJsonStatusEnum["TwoHundred"] = "200";
})(DeletebulkDataExporterConfig200ApplicationJsonStatusEnum || (DeletebulkDataExporterConfig200ApplicationJsonStatusEnum = {}));
// DeletebulkDataExporterConfig200ApplicationJson
/**
 * The bulk response
**/
var DeletebulkDataExporterConfig200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeletebulkDataExporterConfig200ApplicationJson, _super);
    function DeletebulkDataExporterConfig200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], DeletebulkDataExporterConfig200ApplicationJson.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Boolean)
    ], DeletebulkDataExporterConfig200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DeletebulkDataExporterConfig200ApplicationJson.prototype, "status", void 0);
    return DeletebulkDataExporterConfig200ApplicationJson;
}(SpeakeasyBase));
export { DeletebulkDataExporterConfig200ApplicationJson };
var DeletebulkDataExporterConfigRequest = /** @class */ (function (_super) {
    __extends(DeletebulkDataExporterConfigRequest, _super);
    function DeletebulkDataExporterConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/ndjson", elemType: shared.Patch }),
        __metadata("design:type", Array)
    ], DeletebulkDataExporterConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletebulkDataExporterConfigSecurity)
    ], DeletebulkDataExporterConfigRequest.prototype, "security", void 0);
    return DeletebulkDataExporterConfigRequest;
}(SpeakeasyBase));
export { DeletebulkDataExporterConfigRequest };
var DeletebulkDataExporterConfigResponse = /** @class */ (function (_super) {
    __extends(DeletebulkDataExporterConfigResponse, _super);
    function DeletebulkDataExporterConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletebulkDataExporterConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletebulkDataExporterConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DeletebulkDataExporterConfig200ApplicationJson }),
        __metadata("design:type", Array)
    ], DeletebulkDataExporterConfigResponse.prototype, "deletebulkDataExporterConfig200ApplicationJsonObjects", void 0);
    return DeletebulkDataExporterConfigResponse;
}(SpeakeasyBase));
export { DeletebulkDataExporterConfigResponse };
