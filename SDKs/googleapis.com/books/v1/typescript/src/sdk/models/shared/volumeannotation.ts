import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BooksAnnotationsRange } from "./booksannotationsrange";
import { BooksAnnotationsRange } from "./booksannotationsrange";
import { BooksAnnotationsRange } from "./booksannotationsrange";


// VolumeannotationContentRanges
/** 
 * The content ranges to identify the selected text.
**/
export class VolumeannotationContentRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=cfiRange" })
  cfiRange?: BooksAnnotationsRange;

  @Metadata({ data: "json, name=contentVersion" })
  contentVersion?: string;

  @Metadata({ data: "json, name=gbImageRange" })
  gbImageRange?: BooksAnnotationsRange;

  @Metadata({ data: "json, name=gbTextRange" })
  gbTextRange?: BooksAnnotationsRange;
}


export class Volumeannotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationDataId" })
  annotationDataId?: string;

  @Metadata({ data: "json, name=annotationDataLink" })
  annotationDataLink?: string;

  @Metadata({ data: "json, name=annotationType" })
  annotationType?: string;

  @Metadata({ data: "json, name=contentRanges" })
  contentRanges?: VolumeannotationContentRanges;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=layerId" })
  layerId?: string;

  @Metadata({ data: "json, name=pageIds" })
  pageIds?: string[];

  @Metadata({ data: "json, name=selectedText" })
  selectedText?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;

  @Metadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
