import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubaccountResponseEtatEtat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountId" })
  subAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountKeyid" })
  subAccountKeyid?: string;
}


export class SubaccountResponseEtat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat", elemType: SubaccountResponseEtatEtat })
  etat?: SubaccountResponseEtatEtat[];
}


export class SubaccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat" })
  etat?: SubaccountResponseEtat;
}
