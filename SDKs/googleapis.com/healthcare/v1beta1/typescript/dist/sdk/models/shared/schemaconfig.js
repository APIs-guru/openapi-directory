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
import { TimePartitioning } from "./timepartitioning";
export var SchemaConfigSchemaTypeEnum;
(function (SchemaConfigSchemaTypeEnum) {
    SchemaConfigSchemaTypeEnum["SchemaTypeUnspecified"] = "SCHEMA_TYPE_UNSPECIFIED";
    SchemaConfigSchemaTypeEnum["Lossless"] = "LOSSLESS";
    SchemaConfigSchemaTypeEnum["Analytics"] = "ANALYTICS";
    SchemaConfigSchemaTypeEnum["AnalyticsV2"] = "ANALYTICS_V2";
})(SchemaConfigSchemaTypeEnum || (SchemaConfigSchemaTypeEnum = {}));
// SchemaConfig
/**
 * Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
**/
var SchemaConfig = /** @class */ (function (_super) {
    __extends(SchemaConfig, _super);
    function SchemaConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedPartitionConfig" }),
        __metadata("design:type", TimePartitioning)
    ], SchemaConfig.prototype, "lastUpdatedPartitionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recursiveStructureDepth" }),
        __metadata("design:type", String)
    ], SchemaConfig.prototype, "recursiveStructureDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaType" }),
        __metadata("design:type", String)
    ], SchemaConfig.prototype, "schemaType", void 0);
    return SchemaConfig;
}(SpeakeasyBase));
export { SchemaConfig };
