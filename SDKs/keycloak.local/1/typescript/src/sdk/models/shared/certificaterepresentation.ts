import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=kid" })
  kid?: string;

  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;
}
