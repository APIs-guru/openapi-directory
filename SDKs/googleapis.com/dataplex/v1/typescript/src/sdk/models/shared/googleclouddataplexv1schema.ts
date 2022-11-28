import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1SchemaSchemaField } from "./googleclouddataplexv1schemaschemafield";
import { GoogleCloudDataplexV1SchemaPartitionField } from "./googleclouddataplexv1schemapartitionfield";


export enum GoogleCloudDataplexV1SchemaPartitionStyleEnum {
    PartitionStyleUnspecified = "PARTITION_STYLE_UNSPECIFIED",
    HiveCompatible = "HIVE_COMPATIBLE"
}


// GoogleCloudDataplexV1Schema
/** 
 * Schema information describing the structure and layout of the data.
**/
export class GoogleCloudDataplexV1Schema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDataplexV1SchemaSchemaField })
  fields?: GoogleCloudDataplexV1SchemaSchemaField[];

  @SpeakeasyMetadata({ data: "json, name=partitionFields", elemType: GoogleCloudDataplexV1SchemaPartitionField })
  partitionFields?: GoogleCloudDataplexV1SchemaPartitionField[];

  @SpeakeasyMetadata({ data: "json, name=partitionStyle" })
  partitionStyle?: GoogleCloudDataplexV1SchemaPartitionStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=userManaged" })
  userManaged?: boolean;
}
