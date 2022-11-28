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


export enum GoogleCloudDatacatalogV1EntryIntegratedSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    CloudPubsub = "CLOUD_PUBSUB",
    DataprocMetastore = "DATAPROC_METASTORE",
    Dataplex = "DATAPLEX"
}

export enum GoogleCloudDatacatalogV1EntryTypeEnum {
    EntryTypeUnspecified = "ENTRY_TYPE_UNSPECIFIED",
    Table = "TABLE",
    Model = "MODEL",
    DataStream = "DATA_STREAM",
    Fileset = "FILESET",
    Cluster = "CLUSTER",
    Database = "DATABASE",
    DataSourceConnection = "DATA_SOURCE_CONNECTION",
    Routine = "ROUTINE",
    Lake = "LAKE",
    Zone = "ZONE",
    Service = "SERVICE"
}


// GoogleCloudDatacatalogV1EntryInput
/** 
 * Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
**/
export class GoogleCloudDatacatalogV1EntryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessContext" })
  businessContext?: GoogleCloudDatacatalogV1BusinessContext;

  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: GoogleCloudDatacatalogV1DataSourceInput;

  @SpeakeasyMetadata({ data: "json, name=dataSourceConnectionSpec" })
  dataSourceConnectionSpec?: GoogleCloudDatacatalogV1DataSourceConnectionSpec;

  @SpeakeasyMetadata({ data: "json, name=databaseTableSpec" })
  databaseTableSpec?: GoogleCloudDatacatalogV1DatabaseTableSpec;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filesetSpec" })
  filesetSpec?: GoogleCloudDatacatalogV1FilesetSpec;

  @SpeakeasyMetadata({ data: "json, name=fullyQualifiedName" })
  fullyQualifiedName?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsFilesetSpec" })
  gcsFilesetSpec?: GoogleCloudDatacatalogV1GcsFilesetSpecInput;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=linkedResource" })
  linkedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=personalDetails" })
  personalDetails?: GoogleCloudDatacatalogV1PersonalDetails;

  @SpeakeasyMetadata({ data: "json, name=routineSpec" })
  routineSpec?: GoogleCloudDatacatalogV1RoutineSpec;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: GoogleCloudDatacatalogV1Schema;

  @SpeakeasyMetadata({ data: "json, name=sourceSystemTimestamps" })
  sourceSystemTimestamps?: GoogleCloudDatacatalogV1SystemTimestampsInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1EntryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=usageSignal" })
  usageSignal?: GoogleCloudDatacatalogV1UsageSignalInput;

  @SpeakeasyMetadata({ data: "json, name=userSpecifiedSystem" })
  userSpecifiedSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=userSpecifiedType" })
  userSpecifiedType?: string;
}


// GoogleCloudDatacatalogV1Entry
/** 
 * Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
**/
export class GoogleCloudDatacatalogV1Entry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDateShardedSpec" })
  bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1BigQueryDateShardedSpec;

  @SpeakeasyMetadata({ data: "json, name=bigqueryTableSpec" })
  bigqueryTableSpec?: GoogleCloudDatacatalogV1BigQueryTableSpec;

  @SpeakeasyMetadata({ data: "json, name=businessContext" })
  businessContext?: GoogleCloudDatacatalogV1BusinessContext;

  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: GoogleCloudDatacatalogV1DataSource;

  @SpeakeasyMetadata({ data: "json, name=dataSourceConnectionSpec" })
  dataSourceConnectionSpec?: GoogleCloudDatacatalogV1DataSourceConnectionSpec;

  @SpeakeasyMetadata({ data: "json, name=databaseTableSpec" })
  databaseTableSpec?: GoogleCloudDatacatalogV1DatabaseTableSpec;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=filesetSpec" })
  filesetSpec?: GoogleCloudDatacatalogV1FilesetSpec;

  @SpeakeasyMetadata({ data: "json, name=fullyQualifiedName" })
  fullyQualifiedName?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsFilesetSpec" })
  gcsFilesetSpec?: GoogleCloudDatacatalogV1GcsFilesetSpec;

  @SpeakeasyMetadata({ data: "json, name=integratedSystem" })
  integratedSystem?: GoogleCloudDatacatalogV1EntryIntegratedSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=linkedResource" })
  linkedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=personalDetails" })
  personalDetails?: GoogleCloudDatacatalogV1PersonalDetails;

  @SpeakeasyMetadata({ data: "json, name=routineSpec" })
  routineSpec?: GoogleCloudDatacatalogV1RoutineSpec;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: GoogleCloudDatacatalogV1Schema;

  @SpeakeasyMetadata({ data: "json, name=sourceSystemTimestamps" })
  sourceSystemTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDatacatalogV1EntryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=usageSignal" })
  usageSignal?: GoogleCloudDatacatalogV1UsageSignal;

  @SpeakeasyMetadata({ data: "json, name=userSpecifiedSystem" })
  userSpecifiedSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=userSpecifiedType" })
  userSpecifiedType?: string;
}
