import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubaccountAddResponseEtatEtat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountId" })
  subAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountKeyId" })
  subAccountKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountLogin" })
  subAccountLogin?: string;
}


export class SubaccountAddResponseEtat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat", elemType: SubaccountAddResponseEtatEtat })
  etat?: SubaccountAddResponseEtatEtat[];
}


export class SubaccountAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat" })
  etat?: SubaccountAddResponseEtat;
}
