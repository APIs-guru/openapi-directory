import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShippingSettings } from "./shippingsettings";



// ShippingsettingsCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch shippingsettings request.
**/
export class ShippingsettingsCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingSettings" })
  shippingSettings?: ShippingSettings;
}
