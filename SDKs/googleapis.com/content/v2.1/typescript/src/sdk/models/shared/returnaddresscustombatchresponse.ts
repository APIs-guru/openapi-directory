import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnaddressCustomBatchResponseEntry } from "./returnaddresscustombatchresponseentry";



export class ReturnaddressCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: ReturnaddressCustomBatchResponseEntry })
  entries?: ReturnaddressCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
