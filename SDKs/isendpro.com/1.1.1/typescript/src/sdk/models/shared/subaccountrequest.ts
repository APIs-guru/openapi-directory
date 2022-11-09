import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SubaccountRequestSubAccountEditEnum {
    SetPrice = "setPrice"
,    AddCredit = "addCredit"
,    SetRestriction = "setRestriction"
}

export enum SubaccountRequestSubAccountRestrictionStopEnum {
    Zero = "0"
,    One = "1"
}

export enum SubaccountRequestSubAccountRestrictionTimeEnum {
    Zero = "0"
,    One = "1"
}


export class SubaccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyid" })
  keyid: string;

  @Metadata({ data: "json, name=subAccountAddCredit" })
  subAccountAddCredit?: string;

  @Metadata({ data: "json, name=subAccountCountryCode" })
  subAccountCountryCode?: string;

  @Metadata({ data: "json, name=subAccountEdit" })
  subAccountEdit: SubaccountRequestSubAccountEditEnum;

  @Metadata({ data: "json, name=subAccountKeyId" })
  subAccountKeyId?: string;

  @Metadata({ data: "json, name=subAccountPrice" })
  subAccountPrice?: string;

  @Metadata({ data: "json, name=subAccountRestrictionStop" })
  subAccountRestrictionStop?: SubaccountRequestSubAccountRestrictionStopEnum;

  @Metadata({ data: "json, name=subAccountRestrictionTime" })
  subAccountRestrictionTime?: SubaccountRequestSubAccountRestrictionTimeEnum;
}
