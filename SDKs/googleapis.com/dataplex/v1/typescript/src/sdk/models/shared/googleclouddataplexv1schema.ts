import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1SchemaSchemaField } from "./googleclouddataplexv1schemaschemafield";
import { GoogleCloudDataplexV1SchemaPartitionField } from "./googleclouddataplexv1schemapartitionfield";

export enum GoogleCloudDataplexV1SchemaPartitionStyleEnum {
    PartitionStyleUnspecified = "PARTITION_STYLE_UNSPECIFIED"
,    HiveCompatible = "HIVE_COMPATIBLE"
}


// GoogleCloudDataplexV1Schema
/** 
 * Schema information describing the structure and layout of the data.
**/
export class GoogleCloudDataplexV1Schema extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.GoogleCloudDataplexV1SchemaSchemaField })
  fields?: GoogleCloudDataplexV1SchemaSchemaField[];

  @Metadata({ data: "json, name=partitionFields", elemType: shared.GoogleCloudDataplexV1SchemaPartitionField })
  partitionFields?: GoogleCloudDataplexV1SchemaPartitionField[];

  @Metadata({ data: "json, name=partitionStyle" })
  partitionStyle?: GoogleCloudDataplexV1SchemaPartitionStyleEnum;

  @Metadata({ data: "json, name=userManaged" })
  userManaged?: boolean;
}
