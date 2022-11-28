import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec } from "./googleclouddatacatalogv1beta1bigquerydateshardedspec";
import { GoogleCloudDatacatalogV1beta1BigQueryTableSpec } from "./googleclouddatacatalogv1beta1bigquerytablespec";
import { GoogleCloudDatacatalogV1beta1GcsFilesetSpec } from "./googleclouddatacatalogv1beta1gcsfilesetspec";
import { GoogleCloudDatacatalogV1beta1Schema } from "./googleclouddatacatalogv1beta1schema";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";
import { GoogleCloudDatacatalogV1beta1UsageSignal } from "./googleclouddatacatalogv1beta1usagesignal";
import { GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput } from "./googleclouddatacatalogv1beta1gcsfilesetspec";
import { GoogleCloudDatacatalogV1beta1SystemTimestampsInput } from "./googleclouddatacatalogv1beta1systemtimestamps";
export declare enum GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    CloudPubsub = "CLOUD_PUBSUB"
}
export declare enum GoogleCloudDatacatalogV1beta1EntryTypeEnum {
    EntryTypeUnspecified = "ENTRY_TYPE_UNSPECIFIED",
    Table = "TABLE",
    Model = "MODEL",
    DataStream = "DATA_STREAM",
    Fileset = "FILESET"
}
/**
 * Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
**/
export declare class GoogleCloudDatacatalogV1beta1Entry extends SpeakeasyBase {
    bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec;
    bigqueryTableSpec?: GoogleCloudDatacatalogV1beta1BigQueryTableSpec;
    description?: string;
    displayName?: string;
    gcsFilesetSpec?: GoogleCloudDatacatalogV1beta1GcsFilesetSpec;
    integratedSystem?: GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum;
    linkedResource?: string;
    name?: string;
    schema?: GoogleCloudDatacatalogV1beta1Schema;
    sourceSystemTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;
    type?: GoogleCloudDatacatalogV1beta1EntryTypeEnum;
    usageSignal?: GoogleCloudDatacatalogV1beta1UsageSignal;
    userSpecifiedSystem?: string;
    userSpecifiedType?: string;
}
/**
 * Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
**/
export declare class GoogleCloudDatacatalogV1beta1EntryInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    gcsFilesetSpec?: GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput;
    linkedResource?: string;
    schema?: GoogleCloudDatacatalogV1beta1Schema;
    sourceSystemTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
    type?: GoogleCloudDatacatalogV1beta1EntryTypeEnum;
    usageSignal?: GoogleCloudDatacatalogV1beta1UsageSignal;
    userSpecifiedSystem?: string;
    userSpecifiedType?: string;
}
