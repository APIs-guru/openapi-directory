import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubaccountResponseEtatEtat extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=subAccountId" })
  subAccountId?: string;

  @Metadata({ data: "json, name=subAccountKeyid" })
  subAccountKeyid?: string;
}


export class SubaccountResponseEtat extends SpeakeasyBase {
  @Metadata({ data: "json, name=etat", elemType: shared.SubaccountResponseEtatEtat })
  etat?: SubaccountResponseEtatEtat[];
}


export class SubaccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etat" })
  etat?: SubaccountResponseEtat;
}
