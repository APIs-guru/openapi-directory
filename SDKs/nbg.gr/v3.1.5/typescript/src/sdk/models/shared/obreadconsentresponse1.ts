import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObReadDataConsentResponse1 } from "./obreaddataconsentresponse1";
import { Links } from "./links";
import { Meta } from "./meta";



export class ObReadConsentResponse1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadDataConsentResponse1;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta: Meta;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: Map<string, any>;
}
