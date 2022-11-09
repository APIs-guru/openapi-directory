import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocalinventoryCustomBatchResponseEntry } from "./localinventorycustombatchresponseentry";


export class LocalinventoryCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.LocalinventoryCustomBatchResponseEntry })
  entries?: LocalinventoryCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
