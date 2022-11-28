import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleExampleLibraryagentV1Book
/** 
 * A single book in the library.
**/
export class GoogleExampleLibraryagentV1Book extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
