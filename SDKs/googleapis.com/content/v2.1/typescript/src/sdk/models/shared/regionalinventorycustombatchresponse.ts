import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionalinventoryCustomBatchResponseEntry } from "./regionalinventorycustombatchresponseentry";



export class RegionalinventoryCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: RegionalinventoryCustomBatchResponseEntry })
  entries?: RegionalinventoryCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
