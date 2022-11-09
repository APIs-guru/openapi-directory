import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BooksAnnotationsRange } from "./booksannotationsrange";
import { BooksAnnotationsRange } from "./booksannotationsrange";
import { BooksAnnotationsRange } from "./booksannotationsrange";
import { BooksAnnotationsRange } from "./booksannotationsrange";
import { BooksAnnotationsRange } from "./booksannotationsrange";
import { BooksAnnotationsRange } from "./booksannotationsrange";
import { BooksAnnotationsRange } from "./booksannotationsrange";
import { BooksAnnotationsRange } from "./booksannotationsrange";


// AnnotationClientVersionRanges
/** 
 * Selection ranges sent from the client.
**/
export class AnnotationClientVersionRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=cfiRange" })
  cfiRange?: BooksAnnotationsRange;

  @Metadata({ data: "json, name=contentVersion" })
  contentVersion?: string;

  @Metadata({ data: "json, name=gbImageRange" })
  gbImageRange?: BooksAnnotationsRange;

  @Metadata({ data: "json, name=gbTextRange" })
  gbTextRange?: BooksAnnotationsRange;

  @Metadata({ data: "json, name=imageCfiRange" })
  imageCfiRange?: BooksAnnotationsRange;
}


// AnnotationCurrentVersionRanges
/** 
 * Selection ranges for the most recent content version.
**/
export class AnnotationCurrentVersionRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=cfiRange" })
  cfiRange?: BooksAnnotationsRange;

  @Metadata({ data: "json, name=contentVersion" })
  contentVersion?: string;

  @Metadata({ data: "json, name=gbImageRange" })
  gbImageRange?: BooksAnnotationsRange;

  @Metadata({ data: "json, name=gbTextRange" })
  gbTextRange?: BooksAnnotationsRange;

  @Metadata({ data: "json, name=imageCfiRange" })
  imageCfiRange?: BooksAnnotationsRange;
}


export class AnnotationLayerSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedCharacterCount" })
  allowedCharacterCount?: number;

  @Metadata({ data: "json, name=limitType" })
  limitType?: string;

  @Metadata({ data: "json, name=remainingCharacterCount" })
  remainingCharacterCount?: number;
}


export class Annotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=afterSelectedText" })
  afterSelectedText?: string;

  @Metadata({ data: "json, name=beforeSelectedText" })
  beforeSelectedText?: string;

  @Metadata({ data: "json, name=clientVersionRanges" })
  clientVersionRanges?: AnnotationClientVersionRanges;

  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=currentVersionRanges" })
  currentVersionRanges?: AnnotationCurrentVersionRanges;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=highlightStyle" })
  highlightStyle?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=layerId" })
  layerId?: string;

  @Metadata({ data: "json, name=layerSummary" })
  layerSummary?: AnnotationLayerSummary;

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
