import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShippingSettings } from "./shippingsettings";



export class ShippingsettingsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ShippingSettings })
  resources?: ShippingSettings[];
}
