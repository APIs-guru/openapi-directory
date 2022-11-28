import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShippingsettingsCustomBatchResponseEntry } from "./shippingsettingscustombatchresponseentry";



export class ShippingsettingsCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: ShippingsettingsCustomBatchResponseEntry })
  entries?: ShippingsettingsCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
