import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SubaccountAddRequestSubAccountEditEnum {
    AddAccount = "addAccount"
}


export class SubaccountAddRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyid" })
  keyid: string;

  @Metadata({ data: "json, name=subAccountEdit" })
  subAccountEdit: SubaccountAddRequestSubAccountEditEnum;

  @Metadata({ data: "json, name=subAccountLogin" })
  subAccountLogin: string;

  @Metadata({ data: "json, name=subAccountPassword" })
  subAccountPassword: string;
}
