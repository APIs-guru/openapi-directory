import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClusterCustomerAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=street_hint" })
  streetHint?: string;
}
