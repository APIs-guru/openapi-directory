import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleExampleLibraryagentV1Shelf
/** 
 * A Shelf contains a collection of books with a theme.
**/
export class GoogleExampleLibraryagentV1Shelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: string;
}
