import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectId } from "./objectid";



// X509Extension
/** 
 * An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
**/
export class X509Extension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=critical" })
  critical?: boolean;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: ObjectId;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
