package shared

// GoogleCloudDocumentaiV1DocumentPageAnchor
// Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
type GoogleCloudDocumentaiV1DocumentPageAnchor struct {
	PageRefs []GoogleCloudDocumentaiV1DocumentPageAnchorPageRef `json:"pageRefs,omitempty"`
}
