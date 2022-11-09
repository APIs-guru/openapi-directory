import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Derived } from "./derived";


// GrafeasV1beta1ImageDetails
/** 
 * Details of an image occurrence.
**/
export class GrafeasV1beta1ImageDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=derivedImage" })
  derivedImage?: Derived;
}
