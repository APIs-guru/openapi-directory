import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectId } from "./objectid";


// X509Extension
/** 
 * An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
**/
export class X509Extension extends SpeakeasyBase {
  @Metadata({ data: "json, name=critical" })
  critical?: boolean;

  @Metadata({ data: "json, name=objectId" })
  objectId?: ObjectId;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
