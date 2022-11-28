import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { X509Extension } from "./x509extension";



// SubjectAltNames
/** 
 * SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).
**/
export class SubjectAltNames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customSans", elemType: X509Extension })
  customSans?: X509Extension[];

  @SpeakeasyMetadata({ data: "json, name=dnsNames" })
  dnsNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=emailAddresses" })
  emailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=ipAddresses" })
  ipAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];
}
