import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WordArt
/** 
 * A PageElement kind representing word art.
**/
export class WordArt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=renderedText" })
  renderedText?: string;
}
