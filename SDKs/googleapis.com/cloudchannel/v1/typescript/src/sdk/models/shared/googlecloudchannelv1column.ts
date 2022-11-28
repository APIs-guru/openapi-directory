import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudChannelV1ColumnDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    String = "STRING",
    Int = "INT",
    Decimal = "DECIMAL",
    Money = "MONEY",
    Date = "DATE",
    DateTime = "DATE_TIME"
}


// GoogleCloudChannelV1Column
/** 
 * The definition of a report column. Specifies the data properties in the corresponding position of the report rows.
**/
export class GoogleCloudChannelV1Column extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnId" })
  columnId?: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: GoogleCloudChannelV1ColumnDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
