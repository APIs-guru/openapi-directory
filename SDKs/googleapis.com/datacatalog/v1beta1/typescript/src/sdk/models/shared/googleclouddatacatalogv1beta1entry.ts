import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec } from "./googleclouddatacatalogv1beta1bigquerydateshardedspec";
import { GoogleCloudDatacatalogV1beta1BigQueryTableSpec } from "./googleclouddatacatalogv1beta1bigquerytablespec";
import { GoogleCloudDatacatalogV1beta1GcsFilesetSpec } from "./googleclouddatacatalogv1beta1gcsfilesetspec";
import { GoogleCloudDatacatalogV1beta1Schema } from "./googleclouddatacatalogv1beta1schema";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";
import { GoogleCloudDatacatalogV1beta1UsageSignal } from "./googleclouddatacatalogv1beta1usagesignal";

export enum GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED"
,    Bigquery = "BIGQUERY"
,    CloudPubsub = "CLOUD_PUBSUB"
}

export enum GoogleCloudDatacatalogV1beta1EntryTypeEnum {
    EntryTypeUnspecified = "ENTRY_TYPE_UNSPECIFIED"
,    Table = "TABLE"
,    Model = "MODEL"
,    DataStream = "DATA_STREAM"
,    Fileset = "FILESET"
}


// GoogleCloudDatacatalogV1beta1Entry
/** 
 * Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
**/
export class GoogleCloudDatacatalogV1beta1Entry extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigqueryDateShardedSpec" })
  bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec;

  @Metadata({ data: "json, name=bigqueryTableSpec" })
  bigqueryTableSpec?: GoogleCloudDatacatalogV1beta1BigQueryTableSpec;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=gcsFilesetSpec" })
  gcsFilesetSpec?: GoogleCloudDatacatalogV1beta1GcsFilesetSpec;

  @Metadata({ data: "json, name=integratedSystem" })
  integratedSystem?: GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum;

  @Metadata({ data: "json, name=linkedResource" })
  linkedResource?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: GoogleCloudDatacatalogV1beta1Schema;

  @Metadata({ data: "json, name=sourceSystemTimestamps" })
  sourceSystemTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1beta1EntryTypeEnum;

  @Metadata({ data: "json, name=usageSignal" })
  usageSignal?: GoogleCloudDatacatalogV1beta1UsageSignal;

  @Metadata({ data: "json, name=userSpecifiedSystem" })
  userSpecifiedSystem?: string;

  @Metadata({ data: "json, name=userSpecifiedType" })
  userSpecifiedType?: string;
}
