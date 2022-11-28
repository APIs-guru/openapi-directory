import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Certificate
/** 
 * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=notAfterTime" })
  notAfterTime?: string;

  @SpeakeasyMetadata({ data: "json, name=notBeforeTime" })
  notBeforeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=parsed" })
  parsed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rawDer" })
  rawDer?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sha256Fingerprint" })
  sha256Fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectAlternativeDnsNames" })
  subjectAlternativeDnsNames?: string[];
}


// CertificateInput
/** 
 * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
**/
export class CertificateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rawDer" })
  rawDer?: string;
}
