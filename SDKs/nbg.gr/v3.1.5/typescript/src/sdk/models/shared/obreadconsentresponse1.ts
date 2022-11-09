import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObReadDataConsentResponse1 } from "./obreaddataconsentresponse1";
import { Links } from "./links";
import { Meta } from "./meta";


export class ObReadConsentResponse1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadDataConsentResponse1;

  @Metadata({ data: "json, name=Links" })
  links: Links;

  @Metadata({ data: "json, name=Meta" })
  meta: Meta;

  @Metadata({ data: "json, name=Risk" })
  risk: Map<string, any>;
}
