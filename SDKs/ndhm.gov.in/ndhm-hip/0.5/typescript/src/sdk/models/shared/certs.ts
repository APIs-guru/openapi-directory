import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateOrKeyGetSchema } from "./certificateorkeygetschema";



export class Certs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keys", elemType: CertificateOrKeyGetSchema })
  keys?: CertificateOrKeyGetSchema[];
}
