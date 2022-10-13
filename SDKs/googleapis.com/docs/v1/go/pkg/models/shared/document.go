package shared

type DocumentSuggestionsViewModeEnum string

const (
	DocumentSuggestionsViewModeEnumDefaultForCurrentAccess    DocumentSuggestionsViewModeEnum = "DEFAULT_FOR_CURRENT_ACCESS"
	DocumentSuggestionsViewModeEnumSuggestionsInline          DocumentSuggestionsViewModeEnum = "SUGGESTIONS_INLINE"
	DocumentSuggestionsViewModeEnumPreviewSuggestionsAccepted DocumentSuggestionsViewModeEnum = "PREVIEW_SUGGESTIONS_ACCEPTED"
	DocumentSuggestionsViewModeEnumPreviewWithoutSuggestions  DocumentSuggestionsViewModeEnum = "PREVIEW_WITHOUT_SUGGESTIONS"
)

type Document struct {
	Body                          *Body                             `json:"body"`
	DocumentID                    *string                           `json:"documentId"`
	DocumentStyle                 *DocumentStyle                    `json:"documentStyle"`
	Footers                       map[string]Footer                 `json:"footers"`
	Footnotes                     map[string]Footnote               `json:"footnotes"`
	Headers                       map[string]Header                 `json:"headers"`
	InlineObjects                 map[string]InlineObject           `json:"inlineObjects"`
	Lists                         map[string]List                   `json:"lists"`
	NamedRanges                   map[string]NamedRanges            `json:"namedRanges"`
	NamedStyles                   *NamedStyles                      `json:"namedStyles"`
	PositionedObjects             map[string]PositionedObject       `json:"positionedObjects"`
	RevisionID                    *string                           `json:"revisionId"`
	SuggestedDocumentStyleChanges map[string]SuggestedDocumentStyle `json:"suggestedDocumentStyleChanges"`
	SuggestedNamedStylesChanges   map[string]SuggestedNamedStyles   `json:"suggestedNamedStylesChanges"`
	SuggestionsViewMode           *DocumentSuggestionsViewModeEnum  `json:"suggestionsViewMode"`
	Title                         *string                           `json:"title"`
}
