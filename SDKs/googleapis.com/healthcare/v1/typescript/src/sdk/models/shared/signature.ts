import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



// Signature
/** 
 * User signature.
**/
export class Signature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=signatureTime" })
  signatureTime?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
