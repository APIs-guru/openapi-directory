import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BooksAnnotationsRange } from "./booksannotationsrange";



// VolumeannotationContentRanges
/** 
 * The content ranges to identify the selected text.
**/
export class VolumeannotationContentRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cfiRange" })
  cfiRange?: BooksAnnotationsRange;

  @SpeakeasyMetadata({ data: "json, name=contentVersion" })
  contentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=gbImageRange" })
  gbImageRange?: BooksAnnotationsRange;

  @SpeakeasyMetadata({ data: "json, name=gbTextRange" })
  gbTextRange?: BooksAnnotationsRange;
}


export class Volumeannotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationDataId" })
  annotationDataId?: string;

  @SpeakeasyMetadata({ data: "json, name=annotationDataLink" })
  annotationDataLink?: string;

  @SpeakeasyMetadata({ data: "json, name=annotationType" })
  annotationType?: string;

  @SpeakeasyMetadata({ data: "json, name=contentRanges" })
  contentRanges?: VolumeannotationContentRanges;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=layerId" })
  layerId?: string;

  @SpeakeasyMetadata({ data: "json, name=pageIds" })
  pageIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedText" })
  selectedText?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
