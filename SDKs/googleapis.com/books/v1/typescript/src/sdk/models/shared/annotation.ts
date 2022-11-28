import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BooksAnnotationsRange } from "./booksannotationsrange";



// AnnotationClientVersionRanges
/** 
 * Selection ranges sent from the client.
**/
export class AnnotationClientVersionRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cfiRange" })
  cfiRange?: BooksAnnotationsRange;

  @SpeakeasyMetadata({ data: "json, name=contentVersion" })
  contentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=gbImageRange" })
  gbImageRange?: BooksAnnotationsRange;

  @SpeakeasyMetadata({ data: "json, name=gbTextRange" })
  gbTextRange?: BooksAnnotationsRange;

  @SpeakeasyMetadata({ data: "json, name=imageCfiRange" })
  imageCfiRange?: BooksAnnotationsRange;
}


// AnnotationCurrentVersionRanges
/** 
 * Selection ranges for the most recent content version.
**/
export class AnnotationCurrentVersionRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cfiRange" })
  cfiRange?: BooksAnnotationsRange;

  @SpeakeasyMetadata({ data: "json, name=contentVersion" })
  contentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=gbImageRange" })
  gbImageRange?: BooksAnnotationsRange;

  @SpeakeasyMetadata({ data: "json, name=gbTextRange" })
  gbTextRange?: BooksAnnotationsRange;

  @SpeakeasyMetadata({ data: "json, name=imageCfiRange" })
  imageCfiRange?: BooksAnnotationsRange;
}


export class AnnotationLayerSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedCharacterCount" })
  allowedCharacterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=limitType" })
  limitType?: string;

  @SpeakeasyMetadata({ data: "json, name=remainingCharacterCount" })
  remainingCharacterCount?: number;
}


export class Annotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=afterSelectedText" })
  afterSelectedText?: string;

  @SpeakeasyMetadata({ data: "json, name=beforeSelectedText" })
  beforeSelectedText?: string;

  @SpeakeasyMetadata({ data: "json, name=clientVersionRanges" })
  clientVersionRanges?: AnnotationClientVersionRanges;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=currentVersionRanges" })
  currentVersionRanges?: AnnotationCurrentVersionRanges;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=highlightStyle" })
  highlightStyle?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=layerId" })
  layerId?: string;

  @SpeakeasyMetadata({ data: "json, name=layerSummary" })
  layerSummary?: AnnotationLayerSummary;

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
