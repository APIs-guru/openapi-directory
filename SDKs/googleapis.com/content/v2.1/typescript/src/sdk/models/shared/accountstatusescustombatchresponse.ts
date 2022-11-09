import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountstatusesCustomBatchResponseEntry } from "./accountstatusescustombatchresponseentry";


export class AccountstatusesCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.AccountstatusesCustomBatchResponseEntry })
  entries?: AccountstatusesCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
