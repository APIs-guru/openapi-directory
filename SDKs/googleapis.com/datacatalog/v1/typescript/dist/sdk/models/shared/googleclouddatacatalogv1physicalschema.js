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
import { GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema } from "./googleclouddatacatalogv1physicalschemaavroschema";
import { GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema } from "./googleclouddatacatalogv1physicalschemaprotobufschema";
import { GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema } from "./googleclouddatacatalogv1physicalschemathriftschema";
// GoogleCloudDatacatalogV1PhysicalSchema
/**
 * Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data.
**/
var GoogleCloudDatacatalogV1PhysicalSchema = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1PhysicalSchema, _super);
    function GoogleCloudDatacatalogV1PhysicalSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avro" }),
        __metadata("design:type", GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema)
    ], GoogleCloudDatacatalogV1PhysicalSchema.prototype, "avro", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csv" }),
        __metadata("design:type", Map)
    ], GoogleCloudDatacatalogV1PhysicalSchema.prototype, "csv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orc" }),
        __metadata("design:type", Map)
    ], GoogleCloudDatacatalogV1PhysicalSchema.prototype, "orc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parquet" }),
        __metadata("design:type", Map)
    ], GoogleCloudDatacatalogV1PhysicalSchema.prototype, "parquet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protobuf" }),
        __metadata("design:type", GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema)
    ], GoogleCloudDatacatalogV1PhysicalSchema.prototype, "protobuf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thrift" }),
        __metadata("design:type", GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema)
    ], GoogleCloudDatacatalogV1PhysicalSchema.prototype, "thrift", void 0);
    return GoogleCloudDatacatalogV1PhysicalSchema;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1PhysicalSchema };
