import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";

export enum MiscKeywordTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    OutlookBillingInformation = "OUTLOOK_BILLING_INFORMATION"
,    OutlookDirectoryServer = "OUTLOOK_DIRECTORY_SERVER"
,    OutlookKeyword = "OUTLOOK_KEYWORD"
,    OutlookMileage = "OUTLOOK_MILEAGE"
,    OutlookPriority = "OUTLOOK_PRIORITY"
,    OutlookSensitivity = "OUTLOOK_SENSITIVITY"
,    OutlookSubject = "OUTLOOK_SUBJECT"
,    OutlookUser = "OUTLOOK_USER"
,    Home = "HOME"
,    Work = "WORK"
,    Other = "OTHER"
}


// MiscKeyword
/** 
 * A person's miscellaneous keyword.
**/
export class MiscKeyword extends SpeakeasyBase {
  @Metadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=type" })
  type?: MiscKeywordTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
