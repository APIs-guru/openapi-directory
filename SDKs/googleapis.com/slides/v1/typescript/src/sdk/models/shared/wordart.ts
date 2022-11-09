import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WordArt
/** 
 * A PageElement kind representing word art.
**/
export class WordArt extends SpeakeasyBase {
  @Metadata({ data: "json, name=renderedText" })
  renderedText?: string;
}
