import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionalinventoryCustomBatchRequestEntry } from "./regionalinventorycustombatchrequestentry";



export class RegionalinventoryCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: RegionalinventoryCustomBatchRequestEntry })
  entries?: RegionalinventoryCustomBatchRequestEntry[];
}
