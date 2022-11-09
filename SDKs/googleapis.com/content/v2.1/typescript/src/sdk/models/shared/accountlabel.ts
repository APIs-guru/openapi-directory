import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountLabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED"
,    Manual = "MANUAL"
,    Automatic = "AUTOMATIC"
}


// AccountLabel
/** 
 * Label assigned by CSS domain or CSS group to one of its sub-accounts.
**/
export class AccountLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labelId" })
  labelId?: string;

  @Metadata({ data: "json, name=labelType" })
  labelType?: AccountLabelLabelTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
