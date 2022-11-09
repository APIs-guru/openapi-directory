import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubaccountAddResponseEtatEtat extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=subAccountId" })
  subAccountId?: string;

  @Metadata({ data: "json, name=subAccountKeyId" })
  subAccountKeyId?: string;

  @Metadata({ data: "json, name=subAccountLogin" })
  subAccountLogin?: string;
}


export class SubaccountAddResponseEtat extends SpeakeasyBase {
  @Metadata({ data: "json, name=etat", elemType: shared.SubaccountAddResponseEtatEtat })
  etat?: SubaccountAddResponseEtatEtat[];
}


export class SubaccountAddResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etat" })
  etat?: SubaccountAddResponseEtat;
}
