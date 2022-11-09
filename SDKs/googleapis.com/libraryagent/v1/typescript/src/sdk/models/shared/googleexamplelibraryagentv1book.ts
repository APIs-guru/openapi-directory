import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleExampleLibraryagentV1Book
/** 
 * A single book in the library.
**/
export class GoogleExampleLibraryagentV1Book extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=read" })
  read?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
