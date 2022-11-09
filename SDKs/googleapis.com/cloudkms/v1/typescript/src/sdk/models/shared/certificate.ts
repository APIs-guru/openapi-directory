import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Certificate
/** 
 * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
**/
export class Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=notAfterTime" })
  notAfterTime?: string;

  @Metadata({ data: "json, name=notBeforeTime" })
  notBeforeTime?: string;

  @Metadata({ data: "json, name=parsed" })
  parsed?: boolean;

  @Metadata({ data: "json, name=rawDer" })
  rawDer?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=sha256Fingerprint" })
  sha256Fingerprint?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;

  @Metadata({ data: "json, name=subjectAlternativeDnsNames" })
  subjectAlternativeDnsNames?: string[];
}
