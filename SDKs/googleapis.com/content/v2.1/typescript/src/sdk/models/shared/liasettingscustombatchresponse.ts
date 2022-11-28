import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiasettingsCustomBatchResponseEntry } from "./liasettingscustombatchresponseentry";



export class LiasettingsCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: LiasettingsCustomBatchResponseEntry })
  entries?: LiasettingsCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
