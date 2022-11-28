import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Derived } from "./derived";



// GrafeasV1beta1ImageDetails
/** 
 * Details of an image occurrence.
**/
export class GrafeasV1beta1ImageDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=derivedImage" })
  derivedImage?: Derived;
}
