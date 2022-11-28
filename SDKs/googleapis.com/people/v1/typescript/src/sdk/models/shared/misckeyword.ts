import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";


export enum MiscKeywordTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    OutlookBillingInformation = "OUTLOOK_BILLING_INFORMATION",
    OutlookDirectoryServer = "OUTLOOK_DIRECTORY_SERVER",
    OutlookKeyword = "OUTLOOK_KEYWORD",
    OutlookMileage = "OUTLOOK_MILEAGE",
    OutlookPriority = "OUTLOOK_PRIORITY",
    OutlookSensitivity = "OUTLOOK_SENSITIVITY",
    OutlookSubject = "OUTLOOK_SUBJECT",
    OutlookUser = "OUTLOOK_USER",
    Home = "HOME",
    Work = "WORK",
    Other = "OTHER"
}


// MiscKeywordInput
/** 
 * A person's miscellaneous keyword.
**/
export class MiscKeywordInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MiscKeywordTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// MiscKeyword
/** 
 * A person's miscellaneous keyword.
**/
export class MiscKeyword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MiscKeywordTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
