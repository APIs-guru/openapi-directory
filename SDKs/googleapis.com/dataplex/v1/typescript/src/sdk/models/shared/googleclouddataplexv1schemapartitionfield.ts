import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Boolean = "BOOLEAN"
,    Byte = "BYTE"
,    Int16 = "INT16"
,    Int32 = "INT32"
,    Int64 = "INT64"
,    Float = "FLOAT"
,    Double = "DOUBLE"
,    Decimal = "DECIMAL"
,    String = "STRING"
,    Binary = "BINARY"
,    Timestamp = "TIMESTAMP"
,    Date = "DATE"
,    Time = "TIME"
,    Record = "RECORD"
,    Null = "NULL"
}


// GoogleCloudDataplexV1SchemaPartitionField
/** 
 * Represents a key field within the entity's partition structure. You could have up to 20 partition fields, but only the first 10 partitions have the filtering ability due to performance consideration. Note: Partition fields are immutable.
**/
export class GoogleCloudDataplexV1SchemaPartitionField extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum;
}
