import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";


// Signature
/** 
 * User signature.
**/
export class Signature extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=signatureTime" })
  signatureTime?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
