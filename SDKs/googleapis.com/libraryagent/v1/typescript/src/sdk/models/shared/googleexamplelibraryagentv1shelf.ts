import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleExampleLibraryagentV1Shelf
/** 
 * A Shelf contains a collection of books with a theme.
**/
export class GoogleExampleLibraryagentV1Shelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=theme" })
  theme?: string;
}
