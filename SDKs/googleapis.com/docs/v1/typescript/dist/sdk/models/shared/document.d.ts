import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum DocumentSuggestionsViewModeEnum {
    DefaultForCurrentAccess = "DEFAULT_FOR_CURRENT_ACCESS",
    SuggestionsInline = "SUGGESTIONS_INLINE",
    PreviewSuggestionsAccepted = "PREVIEW_SUGGESTIONS_ACCEPTED",
    PreviewWithoutSuggestions = "PREVIEW_WITHOUT_SUGGESTIONS"
}
/**
 * A Google Docs document.
**/
export declare class DocumentInput extends SpeakeasyBase {
    body?: BodyInput;
    documentId?: string;
    documentStyle?: DocumentStyle;
    footers?: Map<string, FooterInput>;
    footnotes?: Map<string, FootnoteInput>;
    headers?: Map<string, HeaderInput>;
    inlineObjects?: Map<string, InlineObject>;
    lists?: Map<string, List>;
    namedRanges?: Map<string, NamedRanges>;
    namedStyles?: NamedStyles;
    positionedObjects?: Map<string, PositionedObject>;
    revisionId?: string;
    suggestedDocumentStyleChanges?: Map<string, SuggestedDocumentStyle>;
    suggestedNamedStylesChanges?: Map<string, SuggestedNamedStyles>;
    suggestionsViewMode?: DocumentSuggestionsViewModeEnum;
    title?: string;
}
/**
 * A Google Docs document.
**/
export declare class Document extends SpeakeasyBase {
    body?: Body;
    documentId?: string;
    documentStyle?: DocumentStyle;
    footers?: Map<string, Footer>;
    footnotes?: Map<string, Footnote>;
    headers?: Map<string, Header>;
    inlineObjects?: Map<string, InlineObject>;
    lists?: Map<string, List>;
    namedRanges?: Map<string, NamedRanges>;
    namedStyles?: NamedStyles;
    positionedObjects?: Map<string, PositionedObject>;
    revisionId?: string;
    suggestedDocumentStyleChanges?: Map<string, SuggestedDocumentStyle>;
    suggestedNamedStylesChanges?: Map<string, SuggestedNamedStyles>;
    suggestionsViewMode?: DocumentSuggestionsViewModeEnum;
    title?: string;
}
