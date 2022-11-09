import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocalinventoryCustomBatchRequestEntry } from "./localinventorycustombatchrequestentry";


export class LocalinventoryCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.LocalinventoryCustomBatchRequestEntry })
  entries?: LocalinventoryCustomBatchRequestEntry[];
}
