import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextLink } from "./textlink";
import { VideoLink } from "./videolink";


// ExtraMaterial
/** 
 * Supplementary material to the feedback.
**/
export class ExtraMaterial extends SpeakeasyBase {
  @Metadata({ data: "json, name=link" })
  link?: TextLink;

  @Metadata({ data: "json, name=video" })
  video?: VideoLink;
}
