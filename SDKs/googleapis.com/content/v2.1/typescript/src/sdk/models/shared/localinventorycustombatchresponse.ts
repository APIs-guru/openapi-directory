import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalinventoryCustomBatchResponseEntry } from "./localinventorycustombatchresponseentry";



export class LocalinventoryCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: LocalinventoryCustomBatchResponseEntry })
  entries?: LocalinventoryCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
