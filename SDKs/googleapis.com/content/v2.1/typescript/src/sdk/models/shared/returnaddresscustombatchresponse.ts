import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReturnaddressCustomBatchResponseEntry } from "./returnaddresscustombatchresponseentry";


export class ReturnaddressCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.ReturnaddressCustomBatchResponseEntry })
  entries?: ReturnaddressCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
