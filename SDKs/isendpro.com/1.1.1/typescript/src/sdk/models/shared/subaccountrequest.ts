import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubaccountRequestSubAccountEditEnum {
    SetPrice = "setPrice",
    AddCredit = "addCredit",
    SetRestriction = "setRestriction"
}

export enum SubaccountRequestSubAccountRestrictionStopEnum {
    Zero = "0",
    One = "1"
}

export enum SubaccountRequestSubAccountRestrictionTimeEnum {
    Zero = "0",
    One = "1"
}


export class SubaccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyid" })
  keyid: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountAddCredit" })
  subAccountAddCredit?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountCountryCode" })
  subAccountCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountEdit" })
  subAccountEdit: SubaccountRequestSubAccountEditEnum;

  @SpeakeasyMetadata({ data: "json, name=subAccountKeyId" })
  subAccountKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountPrice" })
  subAccountPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountRestrictionStop" })
  subAccountRestrictionStop?: SubaccountRequestSubAccountRestrictionStopEnum;

  @SpeakeasyMetadata({ data: "json, name=subAccountRestrictionTime" })
  subAccountRestrictionTime?: SubaccountRequestSubAccountRestrictionTimeEnum;
}
