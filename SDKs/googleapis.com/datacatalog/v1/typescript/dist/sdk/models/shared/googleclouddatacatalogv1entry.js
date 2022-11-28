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
import { GoogleCloudDatacatalogV1BusinessContext } from "./googleclouddatacatalogv1businesscontext";
import { GoogleCloudDatacatalogV1DataSourceInput } from "./googleclouddatacatalogv1datasource";
import { GoogleCloudDatacatalogV1DataSourceConnectionSpec } from "./googleclouddatacatalogv1datasourceconnectionspec";
import { GoogleCloudDatacatalogV1DatabaseTableSpec } from "./googleclouddatacatalogv1databasetablespec";
import { GoogleCloudDatacatalogV1FilesetSpec } from "./googleclouddatacatalogv1filesetspec";
import { GoogleCloudDatacatalogV1GcsFilesetSpecInput } from "./googleclouddatacatalogv1gcsfilesetspec";
import { GoogleCloudDatacatalogV1PersonalDetails } from "./googleclouddatacatalogv1personaldetails";
import { GoogleCloudDatacatalogV1RoutineSpec } from "./googleclouddatacatalogv1routinespec";
import { GoogleCloudDatacatalogV1Schema } from "./googleclouddatacatalogv1schema";
import { GoogleCloudDatacatalogV1SystemTimestampsInput } from "./googleclouddatacatalogv1systemtimestamps";
import { GoogleCloudDatacatalogV1UsageSignalInput } from "./googleclouddatacatalogv1usagesignal";
import { GoogleCloudDatacatalogV1BigQueryDateShardedSpec } from "./googleclouddatacatalogv1bigquerydateshardedspec";
import { GoogleCloudDatacatalogV1BigQueryTableSpec } from "./googleclouddatacatalogv1bigquerytablespec";
import { GoogleCloudDatacatalogV1DataSource } from "./googleclouddatacatalogv1datasource";
import { GoogleCloudDatacatalogV1GcsFilesetSpec } from "./googleclouddatacatalogv1gcsfilesetspec";
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";
import { GoogleCloudDatacatalogV1UsageSignal } from "./googleclouddatacatalogv1usagesignal";
export var GoogleCloudDatacatalogV1EntryIntegratedSystemEnum;
(function (GoogleCloudDatacatalogV1EntryIntegratedSystemEnum) {
    GoogleCloudDatacatalogV1EntryIntegratedSystemEnum["IntegratedSystemUnspecified"] = "INTEGRATED_SYSTEM_UNSPECIFIED";
    GoogleCloudDatacatalogV1EntryIntegratedSystemEnum["Bigquery"] = "BIGQUERY";
    GoogleCloudDatacatalogV1EntryIntegratedSystemEnum["CloudPubsub"] = "CLOUD_PUBSUB";
    GoogleCloudDatacatalogV1EntryIntegratedSystemEnum["DataprocMetastore"] = "DATAPROC_METASTORE";
    GoogleCloudDatacatalogV1EntryIntegratedSystemEnum["Dataplex"] = "DATAPLEX";
})(GoogleCloudDatacatalogV1EntryIntegratedSystemEnum || (GoogleCloudDatacatalogV1EntryIntegratedSystemEnum = {}));
export var GoogleCloudDatacatalogV1EntryTypeEnum;
(function (GoogleCloudDatacatalogV1EntryTypeEnum) {
    GoogleCloudDatacatalogV1EntryTypeEnum["EntryTypeUnspecified"] = "ENTRY_TYPE_UNSPECIFIED";
    GoogleCloudDatacatalogV1EntryTypeEnum["Table"] = "TABLE";
    GoogleCloudDatacatalogV1EntryTypeEnum["Model"] = "MODEL";
    GoogleCloudDatacatalogV1EntryTypeEnum["DataStream"] = "DATA_STREAM";
    GoogleCloudDatacatalogV1EntryTypeEnum["Fileset"] = "FILESET";
    GoogleCloudDatacatalogV1EntryTypeEnum["Cluster"] = "CLUSTER";
    GoogleCloudDatacatalogV1EntryTypeEnum["Database"] = "DATABASE";
    GoogleCloudDatacatalogV1EntryTypeEnum["DataSourceConnection"] = "DATA_SOURCE_CONNECTION";
    GoogleCloudDatacatalogV1EntryTypeEnum["Routine"] = "ROUTINE";
    GoogleCloudDatacatalogV1EntryTypeEnum["Lake"] = "LAKE";
    GoogleCloudDatacatalogV1EntryTypeEnum["Zone"] = "ZONE";
    GoogleCloudDatacatalogV1EntryTypeEnum["Service"] = "SERVICE";
})(GoogleCloudDatacatalogV1EntryTypeEnum || (GoogleCloudDatacatalogV1EntryTypeEnum = {}));
// GoogleCloudDatacatalogV1EntryInput
/**
 * Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
**/
var GoogleCloudDatacatalogV1EntryInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1EntryInput, _super);
    function GoogleCloudDatacatalogV1EntryInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessContext" }),
        __metadata("design:type", GoogleCloudDatacatalogV1BusinessContext)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "businessContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSource" }),
        __metadata("design:type", GoogleCloudDatacatalogV1DataSourceInput)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceConnectionSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1DataSourceConnectionSpec)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "dataSourceConnectionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseTableSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1DatabaseTableSpec)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "databaseTableSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesetSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1FilesetSpec)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "filesetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullyQualifiedName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "fullyQualifiedName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsFilesetSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1GcsFilesetSpecInput)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "gcsFilesetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedResource" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "linkedResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personalDetails" }),
        __metadata("design:type", GoogleCloudDatacatalogV1PersonalDetails)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "personalDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routineSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1RoutineSpec)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "routineSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", GoogleCloudDatacatalogV1Schema)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceSystemTimestamps" }),
        __metadata("design:type", GoogleCloudDatacatalogV1SystemTimestampsInput)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "sourceSystemTimestamps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageSignal" }),
        __metadata("design:type", GoogleCloudDatacatalogV1UsageSignalInput)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "usageSignal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSpecifiedSystem" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "userSpecifiedSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSpecifiedType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryInput.prototype, "userSpecifiedType", void 0);
    return GoogleCloudDatacatalogV1EntryInput;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1EntryInput };
// GoogleCloudDatacatalogV1Entry
/**
 * Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
**/
var GoogleCloudDatacatalogV1Entry = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1Entry, _super);
    function GoogleCloudDatacatalogV1Entry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryDateShardedSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1BigQueryDateShardedSpec)
    ], GoogleCloudDatacatalogV1Entry.prototype, "bigqueryDateShardedSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryTableSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1BigQueryTableSpec)
    ], GoogleCloudDatacatalogV1Entry.prototype, "bigqueryTableSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessContext" }),
        __metadata("design:type", GoogleCloudDatacatalogV1BusinessContext)
    ], GoogleCloudDatacatalogV1Entry.prototype, "businessContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSource" }),
        __metadata("design:type", GoogleCloudDatacatalogV1DataSource)
    ], GoogleCloudDatacatalogV1Entry.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceConnectionSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1DataSourceConnectionSpec)
    ], GoogleCloudDatacatalogV1Entry.prototype, "dataSourceConnectionSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseTableSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1DatabaseTableSpec)
    ], GoogleCloudDatacatalogV1Entry.prototype, "databaseTableSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Entry.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Entry.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesetSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1FilesetSpec)
    ], GoogleCloudDatacatalogV1Entry.prototype, "filesetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullyQualifiedName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Entry.prototype, "fullyQualifiedName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsFilesetSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1GcsFilesetSpec)
    ], GoogleCloudDatacatalogV1Entry.prototype, "gcsFilesetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integratedSystem" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Entry.prototype, "integratedSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDatacatalogV1Entry.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedResource" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Entry.prototype, "linkedResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Entry.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personalDetails" }),
        __metadata("design:type", GoogleCloudDatacatalogV1PersonalDetails)
    ], GoogleCloudDatacatalogV1Entry.prototype, "personalDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routineSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1RoutineSpec)
    ], GoogleCloudDatacatalogV1Entry.prototype, "routineSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", GoogleCloudDatacatalogV1Schema)
    ], GoogleCloudDatacatalogV1Entry.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceSystemTimestamps" }),
        __metadata("design:type", GoogleCloudDatacatalogV1SystemTimestamps)
    ], GoogleCloudDatacatalogV1Entry.prototype, "sourceSystemTimestamps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Entry.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageSignal" }),
        __metadata("design:type", GoogleCloudDatacatalogV1UsageSignal)
    ], GoogleCloudDatacatalogV1Entry.prototype, "usageSignal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSpecifiedSystem" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Entry.prototype, "userSpecifiedSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userSpecifiedType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1Entry.prototype, "userSpecifiedType", void 0);
    return GoogleCloudDatacatalogV1Entry;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1Entry };
