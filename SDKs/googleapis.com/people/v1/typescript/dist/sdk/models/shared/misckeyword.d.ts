import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";
export declare enum MiscKeywordTypeEnum {
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
/**
 * A person's miscellaneous keyword.
**/
export declare class MiscKeywordInput extends SpeakeasyBase {
    metadata?: FieldMetadataInput;
    type?: MiscKeywordTypeEnum;
    value?: string;
}
/**
 * A person's miscellaneous keyword.
**/
export declare class MiscKeyword extends SpeakeasyBase {
    formattedType?: string;
    metadata?: FieldMetadata;
    type?: MiscKeywordTypeEnum;
    value?: string;
}
