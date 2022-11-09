import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountsCustomBatchResponseEntry } from "./accountscustombatchresponseentry";


export class AccountsCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.AccountsCustomBatchResponseEntry })
  entries?: AccountsCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
