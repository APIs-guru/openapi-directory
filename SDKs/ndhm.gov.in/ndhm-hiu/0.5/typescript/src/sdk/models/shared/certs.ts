import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateOrKeyGetSchema } from "./certificateorkeygetschema";


export class Certs extends SpeakeasyBase {
  @Metadata({ data: "json, name=keys", elemType: shared.CertificateOrKeyGetSchema })
  keys?: CertificateOrKeyGetSchema[];
}
