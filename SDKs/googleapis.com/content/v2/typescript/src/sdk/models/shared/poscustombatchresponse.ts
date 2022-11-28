import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PosCustomBatchResponseEntry } from "./poscustombatchresponseentry";



export class PosCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: PosCustomBatchResponseEntry })
  entries?: PosCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
