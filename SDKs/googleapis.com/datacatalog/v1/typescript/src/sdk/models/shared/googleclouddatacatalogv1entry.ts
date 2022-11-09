import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1BigQueryDateShardedSpec } from "./googleclouddatacatalogv1bigquerydateshardedspec";
import { GoogleCloudDatacatalogV1BigQueryTableSpec } from "./googleclouddatacatalogv1bigquerytablespec";
import { GoogleCloudDatacatalogV1BusinessContext } from "./googleclouddatacatalogv1businesscontext";
import { GoogleCloudDatacatalogV1DataSource } from "./googleclouddatacatalogv1datasource";
import { GoogleCloudDatacatalogV1DataSourceConnectionSpec } from "./googleclouddatacatalogv1datasourceconnectionspec";
import { GoogleCloudDatacatalogV1DatabaseTableSpec } from "./googleclouddatacatalogv1databasetablespec";
import { GoogleCloudDatacatalogV1FilesetSpec } from "./googleclouddatacatalogv1filesetspec";
import { GoogleCloudDatacatalogV1GcsFilesetSpec } from "./googleclouddatacatalogv1gcsfilesetspec";
import { GoogleCloudDatacatalogV1PersonalDetails } from "./googleclouddatacatalogv1personaldetails";
import { GoogleCloudDatacatalogV1RoutineSpec } from "./googleclouddatacatalogv1routinespec";
import { GoogleCloudDatacatalogV1Schema } from "./googleclouddatacatalogv1schema";
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";
import { GoogleCloudDatacatalogV1UsageSignal } from "./googleclouddatacatalogv1usagesignal";

export enum GoogleCloudDatacatalogV1EntryIntegratedSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED"
,    Bigquery = "BIGQUERY"
,    CloudPubsub = "CLOUD_PUBSUB"
,    DataprocMetastore = "DATAPROC_METASTORE"
,    Dataplex = "DATAPLEX"
}

export enum GoogleCloudDatacatalogV1EntryTypeEnum {
    EntryTypeUnspecified = "ENTRY_TYPE_UNSPECIFIED"
,    Table = "TABLE"
,    Model = "MODEL"
,    DataStream = "DATA_STREAM"
,    Fileset = "FILESET"
,    Cluster = "CLUSTER"
,    Database = "DATABASE"
,    DataSourceConnection = "DATA_SOURCE_CONNECTION"
,    Routine = "ROUTINE"
,    Lake = "LAKE"
,    Zone = "ZONE"
,    Service = "SERVICE"
}


// GoogleCloudDatacatalogV1Entry
/** 
 * Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
**/
export class GoogleCloudDatacatalogV1Entry extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigqueryDateShardedSpec" })
  bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1BigQueryDateShardedSpec;

  @Metadata({ data: "json, name=bigqueryTableSpec" })
  bigqueryTableSpec?: GoogleCloudDatacatalogV1BigQueryTableSpec;

  @Metadata({ data: "json, name=businessContext" })
  businessContext?: GoogleCloudDatacatalogV1BusinessContext;

  @Metadata({ data: "json, name=dataSource" })
  dataSource?: GoogleCloudDatacatalogV1DataSource;

  @Metadata({ data: "json, name=dataSourceConnectionSpec" })
  dataSourceConnectionSpec?: GoogleCloudDatacatalogV1DataSourceConnectionSpec;

  @Metadata({ data: "json, name=databaseTableSpec" })
  databaseTableSpec?: GoogleCloudDatacatalogV1DatabaseTableSpec;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=filesetSpec" })
  filesetSpec?: GoogleCloudDatacatalogV1FilesetSpec;

  @Metadata({ data: "json, name=fullyQualifiedName" })
  fullyQualifiedName?: string;

  @Metadata({ data: "json, name=gcsFilesetSpec" })
  gcsFilesetSpec?: GoogleCloudDatacatalogV1GcsFilesetSpec;

  @Metadata({ data: "json, name=integratedSystem" })
  integratedSystem?: GoogleCloudDatacatalogV1EntryIntegratedSystemEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=linkedResource" })
  linkedResource?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=personalDetails" })
  personalDetails?: GoogleCloudDatacatalogV1PersonalDetails;

  @Metadata({ data: "json, name=routineSpec" })
  routineSpec?: GoogleCloudDatacatalogV1RoutineSpec;

  @Metadata({ data: "json, name=schema" })
  schema?: GoogleCloudDatacatalogV1Schema;

  @Metadata({ data: "json, name=sourceSystemTimestamps" })
  sourceSystemTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1EntryTypeEnum;

  @Metadata({ data: "json, name=usageSignal" })
  usageSignal?: GoogleCloudDatacatalogV1UsageSignal;

  @Metadata({ data: "json, name=userSpecifiedSystem" })
  userSpecifiedSystem?: string;

  @Metadata({ data: "json, name=userSpecifiedType" })
  userSpecifiedType?: string;
}
