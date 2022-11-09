import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { X509Extension } from "./x509extension";


// SubjectAltNames
/** 
 * SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).
**/
export class SubjectAltNames extends SpeakeasyBase {
  @Metadata({ data: "json, name=customSans", elemType: shared.X509Extension })
  customSans?: X509Extension[];

  @Metadata({ data: "json, name=dnsNames" })
  dnsNames?: string[];

  @Metadata({ data: "json, name=emailAddresses" })
  emailAddresses?: string[];

  @Metadata({ data: "json, name=ipAddresses" })
  ipAddresses?: string[];

  @Metadata({ data: "json, name=uris" })
  uris?: string[];
}
