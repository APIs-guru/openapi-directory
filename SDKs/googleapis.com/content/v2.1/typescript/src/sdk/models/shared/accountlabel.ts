import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountLabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED",
    Manual = "MANUAL",
    Automatic = "AUTOMATIC"
}


// AccountLabel
/** 
 * Label assigned by CSS domain or CSS group to one of its sub-accounts.
**/
export class AccountLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labelId" })
  labelId?: string;

  @SpeakeasyMetadata({ data: "json, name=labelType" })
  labelType?: AccountLabelLabelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// AccountLabelInput
/** 
 * Label assigned by CSS domain or CSS group to one of its sub-accounts.
**/
export class AccountLabelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
