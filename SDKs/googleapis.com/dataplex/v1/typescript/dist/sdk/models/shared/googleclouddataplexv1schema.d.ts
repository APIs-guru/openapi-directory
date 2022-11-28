import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1SchemaSchemaField } from "./googleclouddataplexv1schemaschemafield";
import { GoogleCloudDataplexV1SchemaPartitionField } from "./googleclouddataplexv1schemapartitionfield";
export declare enum GoogleCloudDataplexV1SchemaPartitionStyleEnum {
    PartitionStyleUnspecified = "PARTITION_STYLE_UNSPECIFIED",
    HiveCompatible = "HIVE_COMPATIBLE"
}
/**
 * Schema information describing the structure and layout of the data.
**/
export declare class GoogleCloudDataplexV1Schema extends SpeakeasyBase {
    fields?: GoogleCloudDataplexV1SchemaSchemaField[];
    partitionFields?: GoogleCloudDataplexV1SchemaPartitionField[];
    partitionStyle?: GoogleCloudDataplexV1SchemaPartitionStyleEnum;
    userManaged?: boolean;
}
