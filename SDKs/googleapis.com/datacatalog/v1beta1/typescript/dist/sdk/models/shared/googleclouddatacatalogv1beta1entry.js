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
import { GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec } from "./googleclouddatacatalogv1beta1bigquerydateshardedspec";
import { GoogleCloudDatacatalogV1beta1BigQueryTableSpec } from "./googleclouddatacatalogv1beta1bigquerytablespec";
import { GoogleCloudDatacatalogV1beta1GcsFilesetSpec } from "./googleclouddatacatalogv1beta1gcsfilesetspec";
import { GoogleCloudDatacatalogV1beta1Schema } from "./googleclouddatacatalogv1beta1schema";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";
import { GoogleCloudDatacatalogV1beta1UsageSignal } from "./googleclouddatacatalogv1beta1usagesignal";
import { GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput } from "./googleclouddatacatalogv1beta1gcsfilesetspec";
import { GoogleCloudDatacatalogV1beta1SystemTimestampsInput } from "./googleclouddatacatalogv1beta1systemtimestamps";
export var GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum;
(function (GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum) {
    GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum["IntegratedSystemUnspecified"] = "INTEGRATED_SYSTEM_UNSPECIFIED";
    GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum["Bigquery"] = "BIGQUERY";
    GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum["CloudPubsub"] = "CLOUD_PUBSUB";
})(GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum || (GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum = {}));
export var GoogleCloudDatacatalogV1beta1EntryTypeEnum;
(function (GoogleCloudDatacatalogV1beta1EntryTypeEnum) {
    GoogleCloudDatacatalogV1beta1EntryTypeEnum["EntryTypeUnspecified"] = "ENTRY_TYPE_UNSPECIFIED";
    GoogleCloudDatacatalogV1beta1EntryTypeEnum["Table"] = "TABLE";
    GoogleCloudDatacatalogV1beta1EntryTypeEnum["Model"] = "MODEL";
    GoogleCloudDatacatalogV1beta1EntryTypeEnum["DataStream"] = "DATA_STREAM";
    GoogleCloudDatacatalogV1beta1EntryTypeEnum["Fileset"] = "FILESET";
})(GoogleCloudDatacatalogV1beta1EntryTypeEnum || (GoogleCloudDatacatalogV1beta1EntryTypeEnum = {}));
// GoogleCloudDatacatalogV1beta1Entry
/**
 * Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
**/
var GoogleCloudDatacatalogV1beta1Entry = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1beta1Entry, _super);
    function GoogleCloudDatacatalogV1beta1Entry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryDateShardedSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "bigqueryDateShardedSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryTableSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1beta1BigQueryTableSpec)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "bigqueryTableSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsFilesetSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1beta1GcsFilesetSpec)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "gcsFilesetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integratedSystem" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "integratedSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedResource" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "linkedResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", GoogleCloudDatacatalogV1beta1Schema)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceSystemTimestamps" }),
        __metadata("design:type", GoogleCloudDatacatalogV1beta1SystemTimestamps)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "sourceSystemTimestamps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageSignal" }),
        __metadata("design:type", GoogleCloudDatacatalogV1beta1UsageSignal)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "usageSignal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSpecifiedSystem" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "userSpecifiedSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSpecifiedType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1Entry.prototype, "userSpecifiedType", void 0);
    return GoogleCloudDatacatalogV1beta1Entry;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1beta1Entry };
// GoogleCloudDatacatalogV1beta1EntryInput
/**
 * Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
**/
var GoogleCloudDatacatalogV1beta1EntryInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1beta1EntryInput, _super);
    function GoogleCloudDatacatalogV1beta1EntryInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1EntryInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1EntryInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsFilesetSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput)
    ], GoogleCloudDatacatalogV1beta1EntryInput.prototype, "gcsFilesetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedResource" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1EntryInput.prototype, "linkedResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", GoogleCloudDatacatalogV1beta1Schema)
    ], GoogleCloudDatacatalogV1beta1EntryInput.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceSystemTimestamps" }),
        __metadata("design:type", GoogleCloudDatacatalogV1beta1SystemTimestampsInput)
    ], GoogleCloudDatacatalogV1beta1EntryInput.prototype, "sourceSystemTimestamps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1EntryInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageSignal" }),
        __metadata("design:type", GoogleCloudDatacatalogV1beta1UsageSignal)
    ], GoogleCloudDatacatalogV1beta1EntryInput.prototype, "usageSignal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSpecifiedSystem" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1EntryInput.prototype, "userSpecifiedSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSpecifiedType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1beta1EntryInput.prototype, "userSpecifiedType", void 0);
    return GoogleCloudDatacatalogV1beta1EntryInput;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1beta1EntryInput };
