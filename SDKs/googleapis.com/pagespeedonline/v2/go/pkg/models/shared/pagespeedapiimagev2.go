package shared

// PagespeedAPIImageV2PageRect
// The region of the page that is captured by this image, with dimensions measured in CSS pixels.
type PagespeedAPIImageV2PageRect struct {
	Height *int32
	Left   *int32
	Top    *int32
	Width  *int32
}

type PagespeedAPIImageV2 struct {
	Data     *string
	Height   *int32
	Key      *string
	MimeType *string
	PageRect *PagespeedAPIImageV2PageRect
	Width    *int32
}
