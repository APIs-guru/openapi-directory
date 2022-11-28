import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShippingsettingsCustomBatchRequestEntry } from "./shippingsettingscustombatchrequestentry";



export class ShippingsettingsCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: ShippingsettingsCustomBatchRequestEntry })
  entries?: ShippingsettingsCustomBatchRequestEntry[];
}
