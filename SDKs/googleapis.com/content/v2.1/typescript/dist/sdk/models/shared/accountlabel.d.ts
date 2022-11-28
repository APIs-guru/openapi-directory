import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountLabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED",
    Manual = "MANUAL",
    Automatic = "AUTOMATIC"
}
/**
 * Label assigned by CSS domain or CSS group to one of its sub-accounts.
**/
export declare class AccountLabel extends SpeakeasyBase {
    accountId?: string;
    description?: string;
    labelId?: string;
    labelType?: AccountLabelLabelTypeEnum;
    name?: string;
}
/**
 * Label assigned by CSS domain or CSS group to one of its sub-accounts.
**/
export declare class AccountLabelInput extends SpeakeasyBase {
    accountId?: string;
    description?: string;
    name?: string;
}
