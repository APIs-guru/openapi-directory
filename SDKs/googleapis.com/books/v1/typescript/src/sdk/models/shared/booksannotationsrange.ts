import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BooksAnnotationsRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endOffset" })
  endOffset?: string;

  @Metadata({ data: "json, name=endPosition" })
  endPosition?: string;

  @Metadata({ data: "json, name=startOffset" })
  startOffset?: string;

  @Metadata({ data: "json, name=startPosition" })
  startPosition?: string;
}
