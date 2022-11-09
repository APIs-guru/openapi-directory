import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Errors } from "./errors";
import { ShippingSettings } from "./shippingsettings";


// ShippingsettingsCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch shipping settings response.
**/
export class ShippingsettingsCustomBatchResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=shippingSettings" })
  shippingSettings?: ShippingSettings;
}
