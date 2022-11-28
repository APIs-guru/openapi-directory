package shared

// GoogleCloudDocumentaiV1beta2DocumentPageAnchor
// Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
type GoogleCloudDocumentaiV1beta2DocumentPageAnchor struct {
	PageRefs []GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef `json:"pageRefs,omitempty"`
}
