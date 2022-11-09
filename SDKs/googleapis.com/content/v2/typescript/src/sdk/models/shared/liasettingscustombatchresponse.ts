import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LiasettingsCustomBatchResponseEntry } from "./liasettingscustombatchresponseentry";


export class LiasettingsCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.LiasettingsCustomBatchResponseEntry })
  entries?: LiasettingsCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
