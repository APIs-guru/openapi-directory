import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum GoogleCloudDatacatalogV1EntryIntegratedSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    CloudPubsub = "CLOUD_PUBSUB",
    DataprocMetastore = "DATAPROC_METASTORE",
    Dataplex = "DATAPLEX"
}
export declare enum GoogleCloudDatacatalogV1EntryTypeEnum {
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
/**
 * Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
**/
export declare class GoogleCloudDatacatalogV1EntryInput extends SpeakeasyBase {
    businessContext?: GoogleCloudDatacatalogV1BusinessContext;
    dataSource?: GoogleCloudDatacatalogV1DataSourceInput;
    dataSourceConnectionSpec?: GoogleCloudDatacatalogV1DataSourceConnectionSpec;
    databaseTableSpec?: GoogleCloudDatacatalogV1DatabaseTableSpec;
    description?: string;
    displayName?: string;
    filesetSpec?: GoogleCloudDatacatalogV1FilesetSpec;
    fullyQualifiedName?: string;
    gcsFilesetSpec?: GoogleCloudDatacatalogV1GcsFilesetSpecInput;
    labels?: Map<string, string>;
    linkedResource?: string;
    personalDetails?: GoogleCloudDatacatalogV1PersonalDetails;
    routineSpec?: GoogleCloudDatacatalogV1RoutineSpec;
    schema?: GoogleCloudDatacatalogV1Schema;
    sourceSystemTimestamps?: GoogleCloudDatacatalogV1SystemTimestampsInput;
    type?: GoogleCloudDatacatalogV1EntryTypeEnum;
    usageSignal?: GoogleCloudDatacatalogV1UsageSignalInput;
    userSpecifiedSystem?: string;
    userSpecifiedType?: string;
}
/**
 * Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
**/
export declare class GoogleCloudDatacatalogV1Entry extends SpeakeasyBase {
    bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1BigQueryDateShardedSpec;
    bigqueryTableSpec?: GoogleCloudDatacatalogV1BigQueryTableSpec;
    businessContext?: GoogleCloudDatacatalogV1BusinessContext;
    dataSource?: GoogleCloudDatacatalogV1DataSource;
    dataSourceConnectionSpec?: GoogleCloudDatacatalogV1DataSourceConnectionSpec;
    databaseTableSpec?: GoogleCloudDatacatalogV1DatabaseTableSpec;
    description?: string;
    displayName?: string;
    filesetSpec?: GoogleCloudDatacatalogV1FilesetSpec;
    fullyQualifiedName?: string;
    gcsFilesetSpec?: GoogleCloudDatacatalogV1GcsFilesetSpec;
    integratedSystem?: GoogleCloudDatacatalogV1EntryIntegratedSystemEnum;
    labels?: Map<string, string>;
    linkedResource?: string;
    name?: string;
    personalDetails?: GoogleCloudDatacatalogV1PersonalDetails;
    routineSpec?: GoogleCloudDatacatalogV1RoutineSpec;
    schema?: GoogleCloudDatacatalogV1Schema;
    sourceSystemTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
    type?: GoogleCloudDatacatalogV1EntryTypeEnum;
    usageSignal?: GoogleCloudDatacatalogV1UsageSignal;
    userSpecifiedSystem?: string;
    userSpecifiedType?: string;
}
