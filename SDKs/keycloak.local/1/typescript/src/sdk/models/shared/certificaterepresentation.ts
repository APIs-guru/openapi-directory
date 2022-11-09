import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CertificateRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=kid" })
  kid?: string;

  @Metadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @Metadata({ data: "json, name=publicKey" })
  publicKey?: string;
}
