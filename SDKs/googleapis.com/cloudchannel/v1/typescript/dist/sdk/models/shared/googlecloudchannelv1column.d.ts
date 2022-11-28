import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudChannelV1ColumnDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    String = "STRING",
    Int = "INT",
    Decimal = "DECIMAL",
    Money = "MONEY",
    Date = "DATE",
    DateTime = "DATE_TIME"
}
/**
 * The definition of a report column. Specifies the data properties in the corresponding position of the report rows.
**/
export declare class GoogleCloudChannelV1Column extends SpeakeasyBase {
    columnId?: string;
    dataType?: GoogleCloudChannelV1ColumnDataTypeEnum;
    displayName?: string;
}
