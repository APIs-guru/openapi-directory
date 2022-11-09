import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionalinventoryCustomBatchRequestEntry } from "./regionalinventorycustombatchrequestentry";


export class RegionalinventoryCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.RegionalinventoryCustomBatchRequestEntry })
  entries?: RegionalinventoryCustomBatchRequestEntry[];
}
