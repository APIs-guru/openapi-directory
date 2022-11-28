import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnpolicyCustomBatchResponseEntry } from "./returnpolicycustombatchresponseentry";



export class ReturnpolicyCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: ReturnpolicyCustomBatchResponseEntry })
  entries?: ReturnpolicyCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
