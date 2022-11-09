import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataRange } from "./datarange";

export enum QueryMetadataFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED"
,    Csv = "CSV"
,    Xlsx = "XLSX"
}


// QueryMetadata
/** 
 * Query metadata.
**/
export class QueryMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataRange" })
  dataRange?: DataRange;

  @Metadata({ data: "json, name=format" })
  format?: QueryMetadataFormatEnum;

  @Metadata({ data: "json, name=sendNotification" })
  sendNotification?: boolean;

  @Metadata({ data: "json, name=shareEmailAddress" })
  shareEmailAddress?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
