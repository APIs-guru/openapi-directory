import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccounttaxCustomBatchResponseEntry } from "./accounttaxcustombatchresponseentry";


export class AccounttaxCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.AccounttaxCustomBatchResponseEntry })
  entries?: AccounttaxCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
