import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { ShippingSettings } from "./shippingsettings";



// ShippingsettingsCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch shipping settings response.
**/
export class ShippingsettingsCustomBatchResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingSettings" })
  shippingSettings?: ShippingSettings;
}
