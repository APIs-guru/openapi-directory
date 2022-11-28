import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataRange } from "./datarange";


export enum QueryMetadataFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Csv = "CSV",
    Xlsx = "XLSX"
}


// QueryMetadata
/** 
 * Query metadata.
**/
export class QueryMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataRange" })
  dataRange?: DataRange;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: QueryMetadataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=sendNotification" })
  sendNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shareEmailAddress" })
  shareEmailAddress?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
