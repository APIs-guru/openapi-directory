import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Certificate
/** 
 * A SSL/TLS X509 certificate
**/
export class Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoRenew" })
  autoRenew: string;

  @Metadata({ data: "json, name=ca" })
  ca: string;

  @Metadata({ data: "json, name=caRef" })
  caRef: string;

  @Metadata({ data: "json, name=chain" })
  chain: string;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=privateKey" })
  privateKey: string;

  @Metadata({ data: "json, name=selfSigned" })
  selfSigned: string;

  @Metadata({ data: "json, name=subject" })
  subject: string;

  @Metadata({ data: "json, name=to" })
  to: string;

  @Metadata({ data: "json, name=valid" })
  valid: string;
}
