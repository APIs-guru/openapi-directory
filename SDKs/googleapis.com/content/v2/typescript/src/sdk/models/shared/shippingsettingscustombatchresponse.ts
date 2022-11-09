import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ShippingsettingsCustomBatchResponseEntry } from "./shippingsettingscustombatchresponseentry";


export class ShippingsettingsCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.ShippingsettingsCustomBatchResponseEntry })
  entries?: ShippingsettingsCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
