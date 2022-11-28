import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec } from "./googleclouddatacatalogv1beta1bigquerydateshardedspec";
import { GoogleCloudDatacatalogV1beta1BigQueryTableSpec } from "./googleclouddatacatalogv1beta1bigquerytablespec";
import { GoogleCloudDatacatalogV1beta1GcsFilesetSpec } from "./googleclouddatacatalogv1beta1gcsfilesetspec";
import { GoogleCloudDatacatalogV1beta1Schema } from "./googleclouddatacatalogv1beta1schema";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";
import { GoogleCloudDatacatalogV1beta1UsageSignal } from "./googleclouddatacatalogv1beta1usagesignal";
import { GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput } from "./googleclouddatacatalogv1beta1gcsfilesetspec";
import { GoogleCloudDatacatalogV1beta1SystemTimestampsInput } from "./googleclouddatacatalogv1beta1systemtimestamps";


export enum GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    CloudPubsub = "CLOUD_PUBSUB"
}

export enum GoogleCloudDatacatalogV1beta1EntryTypeEnum {
    EntryTypeUnspecified = "ENTRY_TYPE_UNSPECIFIED",
    Table = "TABLE",
    Model = "MODEL",
    DataStream = "DATA_STREAM",
    Fileset = "FILESET"
}


// GoogleCloudDatacatalogV1beta1Entry
/** 
 * Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
**/
export class GoogleCloudDatacatalogV1beta1Entry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDateShardedSpec" })
  bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec;

  @SpeakeasyMetadata({ data: "json, name=bigqueryTableSpec" })
  bigqueryTableSpec?: GoogleCloudDatacatalogV1beta1BigQueryTableSpec;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsFilesetSpec" })
  gcsFilesetSpec?: GoogleCloudDatacatalogV1beta1GcsFilesetSpec;

  @SpeakeasyMetadata({ data: "json, name=integratedSystem" })
  integratedSystem?: GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=linkedResource" })
  linkedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: GoogleCloudDatacatalogV1beta1Schema;

  @SpeakeasyMetadata({ data: "json, name=sourceSystemTimestamps" })
  sourceSystemTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1beta1EntryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=usageSignal" })
  usageSignal?: GoogleCloudDatacatalogV1beta1UsageSignal;

  @SpeakeasyMetadata({ data: "json, name=userSpecifiedSystem" })
  userSpecifiedSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=userSpecifiedType" })
  userSpecifiedType?: string;
}


// GoogleCloudDatacatalogV1beta1EntryInput
/** 
 * Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
**/
export class GoogleCloudDatacatalogV1beta1EntryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsFilesetSpec" })
  gcsFilesetSpec?: GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput;

  @SpeakeasyMetadata({ data: "json, name=linkedResource" })
  linkedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: GoogleCloudDatacatalogV1beta1Schema;

  @SpeakeasyMetadata({ data: "json, name=sourceSystemTimestamps" })
  sourceSystemTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestampsInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1beta1EntryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=usageSignal" })
  usageSignal?: GoogleCloudDatacatalogV1beta1UsageSignal;

  @SpeakeasyMetadata({ data: "json, name=userSpecifiedSystem" })
  userSpecifiedSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=userSpecifiedType" })
  userSpecifiedType?: string;
}
