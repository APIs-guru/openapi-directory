import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionalinventoryCustomBatchResponseEntry } from "./regionalinventorycustombatchresponseentry";


export class RegionalinventoryCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.RegionalinventoryCustomBatchResponseEntry })
  entries?: RegionalinventoryCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
