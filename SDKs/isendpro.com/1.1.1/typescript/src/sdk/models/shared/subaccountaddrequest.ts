import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubaccountAddRequestSubAccountEditEnum {
    AddAccount = "addAccount"
}


export class SubaccountAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyid" })
  keyid: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountEdit" })
  subAccountEdit: SubaccountAddRequestSubAccountEditEnum;

  @SpeakeasyMetadata({ data: "json, name=subAccountLogin" })
  subAccountLogin: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountPassword" })
  subAccountPassword: string;
}
