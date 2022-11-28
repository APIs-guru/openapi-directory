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
var CreateBulkDataExporterConfigsSecurity = /** @class */ (function (_super) {
    __extends(CreateBulkDataExporterConfigsSecurity, _super);
    function CreateBulkDataExporterConfigsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], CreateBulkDataExporterConfigsSecurity.prototype, "otoroshiAuth", void 0);
    return CreateBulkDataExporterConfigsSecurity;
}(SpeakeasyBase));
export { CreateBulkDataExporterConfigsSecurity };
export var CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum;
(function (CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum) {
    CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum["TwoHundredAndOne"] = "201";
})(CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum || (CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum = {}));
// CreateBulkDataExporterConfigs200ApplicationJson
/**
 * The bulk response
**/
var CreateBulkDataExporterConfigs200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateBulkDataExporterConfigs200ApplicationJson, _super);
    function CreateBulkDataExporterConfigs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Boolean)
    ], CreateBulkDataExporterConfigs200ApplicationJson.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Boolean)
    ], CreateBulkDataExporterConfigs200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CreateBulkDataExporterConfigs200ApplicationJson.prototype, "status", void 0);
    return CreateBulkDataExporterConfigs200ApplicationJson;
}(SpeakeasyBase));
export { CreateBulkDataExporterConfigs200ApplicationJson };
var CreateBulkDataExporterConfigsRequest = /** @class */ (function (_super) {
    __extends(CreateBulkDataExporterConfigsRequest, _super);
    function CreateBulkDataExporterConfigsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/ndjson" }),
        __metadata("design:type", shared.DataExporterConfig)
    ], CreateBulkDataExporterConfigsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateBulkDataExporterConfigsSecurity)
    ], CreateBulkDataExporterConfigsRequest.prototype, "security", void 0);
    return CreateBulkDataExporterConfigsRequest;
}(SpeakeasyBase));
export { CreateBulkDataExporterConfigsRequest };
var CreateBulkDataExporterConfigsResponse = /** @class */ (function (_super) {
    __extends(CreateBulkDataExporterConfigsResponse, _super);
    function CreateBulkDataExporterConfigsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateBulkDataExporterConfigsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateBulkDataExporterConfigsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: CreateBulkDataExporterConfigs200ApplicationJson }),
        __metadata("design:type", Array)
    ], CreateBulkDataExporterConfigsResponse.prototype, "createBulkDataExporterConfigs200ApplicationJsonObjects", void 0);
    return CreateBulkDataExporterConfigsResponse;
}(SpeakeasyBase));
export { CreateBulkDataExporterConfigsResponse };
