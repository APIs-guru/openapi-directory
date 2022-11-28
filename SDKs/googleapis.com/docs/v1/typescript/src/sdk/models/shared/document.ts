import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BodyInput } from "./body";
import { DocumentStyle } from "./documentstyle";
import { FooterInput } from "./footer";
import { FootnoteInput } from "./footnote";
import { HeaderInput } from "./header";
import { InlineObject } from "./inlineobject";
import { List } from "./list";
import { NamedRanges } from "./namedranges";
import { NamedStyles } from "./namedstyles";
import { PositionedObject } from "./positionedobject";
import { SuggestedDocumentStyle } from "./suggesteddocumentstyle";
import { SuggestedNamedStyles } from "./suggestednamedstyles";
import { Body } from "./body";
import { Footer } from "./footer";
import { Footnote } from "./footnote";
import { Header } from "./header";


export enum DocumentSuggestionsViewModeEnum {
    DefaultForCurrentAccess = "DEFAULT_FOR_CURRENT_ACCESS",
    SuggestionsInline = "SUGGESTIONS_INLINE",
    PreviewSuggestionsAccepted = "PREVIEW_SUGGESTIONS_ACCEPTED",
    PreviewWithoutSuggestions = "PREVIEW_WITHOUT_SUGGESTIONS"
}


// DocumentInput
/** 
 * A Google Docs document.
**/
export class DocumentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: BodyInput;

  @SpeakeasyMetadata({ data: "json, name=documentId" })
  documentId?: string;

  @SpeakeasyMetadata({ data: "json, name=documentStyle" })
  documentStyle?: DocumentStyle;

  @SpeakeasyMetadata({ data: "json, name=footers", elemType: FooterInput })
  footers?: Map<string, FooterInput>;

  @SpeakeasyMetadata({ data: "json, name=footnotes", elemType: FootnoteInput })
  footnotes?: Map<string, FootnoteInput>;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: HeaderInput })
  headers?: Map<string, HeaderInput>;

  @SpeakeasyMetadata({ data: "json, name=inlineObjects", elemType: InlineObject })
  inlineObjects?: Map<string, InlineObject>;

  @SpeakeasyMetadata({ data: "json, name=lists", elemType: List })
  lists?: Map<string, List>;

  @SpeakeasyMetadata({ data: "json, name=namedRanges", elemType: NamedRanges })
  namedRanges?: Map<string, NamedRanges>;

  @SpeakeasyMetadata({ data: "json, name=namedStyles" })
  namedStyles?: NamedStyles;

  @SpeakeasyMetadata({ data: "json, name=positionedObjects", elemType: PositionedObject })
  positionedObjects?: Map<string, PositionedObject>;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestedDocumentStyleChanges", elemType: SuggestedDocumentStyle })
  suggestedDocumentStyleChanges?: Map<string, SuggestedDocumentStyle>;

  @SpeakeasyMetadata({ data: "json, name=suggestedNamedStylesChanges", elemType: SuggestedNamedStyles })
  suggestedNamedStylesChanges?: Map<string, SuggestedNamedStyles>;

  @SpeakeasyMetadata({ data: "json, name=suggestionsViewMode" })
  suggestionsViewMode?: DocumentSuggestionsViewModeEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// Document
/** 
 * A Google Docs document.
**/
export class Document extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: Body;

  @SpeakeasyMetadata({ data: "json, name=documentId" })
  documentId?: string;

  @SpeakeasyMetadata({ data: "json, name=documentStyle" })
  documentStyle?: DocumentStyle;

  @SpeakeasyMetadata({ data: "json, name=footers", elemType: Footer })
  footers?: Map<string, Footer>;

  @SpeakeasyMetadata({ data: "json, name=footnotes", elemType: Footnote })
  footnotes?: Map<string, Footnote>;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: Header })
  headers?: Map<string, Header>;

  @SpeakeasyMetadata({ data: "json, name=inlineObjects", elemType: InlineObject })
  inlineObjects?: Map<string, InlineObject>;

  @SpeakeasyMetadata({ data: "json, name=lists", elemType: List })
  lists?: Map<string, List>;

  @SpeakeasyMetadata({ data: "json, name=namedRanges", elemType: NamedRanges })
  namedRanges?: Map<string, NamedRanges>;

  @SpeakeasyMetadata({ data: "json, name=namedStyles" })
  namedStyles?: NamedStyles;

  @SpeakeasyMetadata({ data: "json, name=positionedObjects", elemType: PositionedObject })
  positionedObjects?: Map<string, PositionedObject>;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestedDocumentStyleChanges", elemType: SuggestedDocumentStyle })
  suggestedDocumentStyleChanges?: Map<string, SuggestedDocumentStyle>;

  @SpeakeasyMetadata({ data: "json, name=suggestedNamedStylesChanges", elemType: SuggestedNamedStyles })
  suggestedNamedStylesChanges?: Map<string, SuggestedNamedStyles>;

  @SpeakeasyMetadata({ data: "json, name=suggestionsViewMode" })
  suggestionsViewMode?: DocumentSuggestionsViewModeEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
