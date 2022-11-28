import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BooksAnnotationsRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endOffset" })
  endOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=endPosition" })
  endPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=startOffset" })
  startOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=startPosition" })
  startPosition?: string;
}
