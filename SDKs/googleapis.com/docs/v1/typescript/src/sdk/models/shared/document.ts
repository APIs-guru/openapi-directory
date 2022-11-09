import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Body } from "./body";
import { DocumentStyle } from "./documentstyle";
import { Footer } from "./footer";
import { Footnote } from "./footnote";
import { Header } from "./header";
import { InlineObject } from "./inlineobject";
import { List } from "./list";
import { NamedRanges } from "./namedranges";
import { NamedStyles } from "./namedstyles";
import { PositionedObject } from "./positionedobject";
import { SuggestedDocumentStyle } from "./suggesteddocumentstyle";
import { SuggestedNamedStyles } from "./suggestednamedstyles";

export enum DocumentSuggestionsViewModeEnum {
    DefaultForCurrentAccess = "DEFAULT_FOR_CURRENT_ACCESS"
,    SuggestionsInline = "SUGGESTIONS_INLINE"
,    PreviewSuggestionsAccepted = "PREVIEW_SUGGESTIONS_ACCEPTED"
,    PreviewWithoutSuggestions = "PREVIEW_WITHOUT_SUGGESTIONS"
}


// Document
/** 
 * A Google Docs document.
**/
export class Document extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: Body;

  @Metadata({ data: "json, name=documentId" })
  documentId?: string;

  @Metadata({ data: "json, name=documentStyle" })
  documentStyle?: DocumentStyle;

  @Metadata({ data: "json, name=footers", elemType: shared.Footer })
  footers?: Map<string, Footer>;

  @Metadata({ data: "json, name=footnotes", elemType: shared.Footnote })
  footnotes?: Map<string, Footnote>;

  @Metadata({ data: "json, name=headers", elemType: shared.Header })
  headers?: Map<string, Header>;

  @Metadata({ data: "json, name=inlineObjects", elemType: shared.InlineObject })
  inlineObjects?: Map<string, InlineObject>;

  @Metadata({ data: "json, name=lists", elemType: shared.List })
  lists?: Map<string, List>;

  @Metadata({ data: "json, name=namedRanges", elemType: shared.NamedRanges })
  namedRanges?: Map<string, NamedRanges>;

  @Metadata({ data: "json, name=namedStyles" })
  namedStyles?: NamedStyles;

  @Metadata({ data: "json, name=positionedObjects", elemType: shared.PositionedObject })
  positionedObjects?: Map<string, PositionedObject>;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=suggestedDocumentStyleChanges", elemType: shared.SuggestedDocumentStyle })
  suggestedDocumentStyleChanges?: Map<string, SuggestedDocumentStyle>;

  @Metadata({ data: "json, name=suggestedNamedStylesChanges", elemType: shared.SuggestedNamedStyles })
  suggestedNamedStylesChanges?: Map<string, SuggestedNamedStyles>;

  @Metadata({ data: "json, name=suggestionsViewMode" })
  suggestionsViewMode?: DocumentSuggestionsViewModeEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
