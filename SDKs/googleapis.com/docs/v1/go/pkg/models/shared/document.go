package shared

type DocumentSuggestionsViewModeEnum string

const (
	DocumentSuggestionsViewModeEnumDefaultForCurrentAccess    DocumentSuggestionsViewModeEnum = "DEFAULT_FOR_CURRENT_ACCESS"
	DocumentSuggestionsViewModeEnumSuggestionsInline          DocumentSuggestionsViewModeEnum = "SUGGESTIONS_INLINE"
	DocumentSuggestionsViewModeEnumPreviewSuggestionsAccepted DocumentSuggestionsViewModeEnum = "PREVIEW_SUGGESTIONS_ACCEPTED"
	DocumentSuggestionsViewModeEnumPreviewWithoutSuggestions  DocumentSuggestionsViewModeEnum = "PREVIEW_WITHOUT_SUGGESTIONS"
)

type Document struct {
	Body                          *Body                             `json:"body,omitempty"`
	DocumentID                    *string                           `json:"documentId,omitempty"`
	DocumentStyle                 *DocumentStyle                    `json:"documentStyle,omitempty"`
	Footers                       map[string]Footer                 `json:"footers,omitempty"`
	Footnotes                     map[string]Footnote               `json:"footnotes,omitempty"`
	Headers                       map[string]Header                 `json:"headers,omitempty"`
	InlineObjects                 map[string]InlineObject           `json:"inlineObjects,omitempty"`
	Lists                         map[string]List                   `json:"lists,omitempty"`
	NamedRanges                   map[string]NamedRanges            `json:"namedRanges,omitempty"`
	NamedStyles                   *NamedStyles                      `json:"namedStyles,omitempty"`
	PositionedObjects             map[string]PositionedObject       `json:"positionedObjects,omitempty"`
	RevisionID                    *string                           `json:"revisionId,omitempty"`
	SuggestedDocumentStyleChanges map[string]SuggestedDocumentStyle `json:"suggestedDocumentStyleChanges,omitempty"`
	SuggestedNamedStylesChanges   map[string]SuggestedNamedStyles   `json:"suggestedNamedStylesChanges,omitempty"`
	SuggestionsViewMode           *DocumentSuggestionsViewModeEnum  `json:"suggestionsViewMode,omitempty"`
	Title                         *string                           `json:"title,omitempty"`
}
