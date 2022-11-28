import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";


export enum BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}

export enum BatchGetValuesByDataFilterRequestMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}

export enum BatchGetValuesByDataFilterRequestValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}


// BatchGetValuesByDataFilterRequest
/** 
 * The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.
**/
export class BatchGetValuesByDataFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFilters", elemType: DataFilter })
  dataFilters?: DataFilter[];

  @SpeakeasyMetadata({ data: "json, name=dateTimeRenderOption" })
  dateTimeRenderOption?: BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=majorDimension" })
  majorDimension?: BatchGetValuesByDataFilterRequestMajorDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=valueRenderOption" })
  valueRenderOption?: BatchGetValuesByDataFilterRequestValueRenderOptionEnum;
}
