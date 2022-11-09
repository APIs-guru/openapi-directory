import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ShippingsettingsCustomBatchRequestEntry } from "./shippingsettingscustombatchrequestentry";


export class ShippingsettingsCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.ShippingsettingsCustomBatchRequestEntry })
  entries?: ShippingsettingsCustomBatchRequestEntry[];
}
