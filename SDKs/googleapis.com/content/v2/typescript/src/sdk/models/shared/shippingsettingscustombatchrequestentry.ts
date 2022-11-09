import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShippingSettings } from "./shippingsettings";


// ShippingsettingsCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch shippingsettings request.
**/
export class ShippingsettingsCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=shippingSettings" })
  shippingSettings?: ShippingSettings;
}
