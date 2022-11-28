import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Certificate
/** 
 * A SSL/TLS X509 certificate
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRenew" })
  autoRenew: string;

  @SpeakeasyMetadata({ data: "json, name=ca" })
  ca: string;

  @SpeakeasyMetadata({ data: "json, name=caRef" })
  caRef: string;

  @SpeakeasyMetadata({ data: "json, name=chain" })
  chain: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey: string;

  @SpeakeasyMetadata({ data: "json, name=selfSigned" })
  selfSigned: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid: string;
}
