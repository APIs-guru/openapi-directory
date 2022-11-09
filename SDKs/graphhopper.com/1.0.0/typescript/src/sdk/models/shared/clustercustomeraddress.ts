import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ClusterCustomerAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lon" })
  lon?: number;

  @Metadata({ data: "json, name=street_hint" })
  streetHint?: string;
}
