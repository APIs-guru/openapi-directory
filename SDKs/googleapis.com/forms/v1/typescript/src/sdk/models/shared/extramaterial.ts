import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextLink } from "./textlink";
import { VideoLink } from "./videolink";



// ExtraMaterial
/** 
 * Supplementary material to the feedback.
**/
export class ExtraMaterial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: TextLink;

  @SpeakeasyMetadata({ data: "json, name=video" })
  video?: VideoLink;
}
