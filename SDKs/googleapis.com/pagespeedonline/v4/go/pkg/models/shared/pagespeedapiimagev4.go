package shared

type PagespeedAPIImageV4PageRect struct {
	Height *int32
	Left   *int32
	Top    *int32
	Width  *int32
}

type PagespeedAPIImageV4 struct {
	Data     *string
	Height   *int32
	Key      *string
	MimeType *string
	PageRect *PagespeedAPIImageV4PageRect
	Width    *int32
}
