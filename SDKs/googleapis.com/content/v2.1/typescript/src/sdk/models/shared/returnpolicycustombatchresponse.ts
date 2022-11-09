import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReturnpolicyCustomBatchResponseEntry } from "./returnpolicycustombatchresponseentry";


export class ReturnpolicyCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.ReturnpolicyCustomBatchResponseEntry })
  entries?: ReturnpolicyCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
