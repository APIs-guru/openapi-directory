package shared

type PagespeedAPIFormatStringV2ArgsRects struct {
	Height *int32
	Left   *int32
	Top    *int32
	Width  *int32
}

type PagespeedAPIFormatStringV2ArgsSecondaryRects struct {
	Height *int32
	Left   *int32
	Top    *int32
	Width  *int32
}

type PagespeedAPIFormatStringV2Args struct {
	Key            *string
	Rects          []PagespeedAPIFormatStringV2ArgsRects
	SecondaryRects []PagespeedAPIFormatStringV2ArgsSecondaryRects
	Type           *string
	Value          *string
}

type PagespeedAPIFormatStringV2 struct {
	Args   []PagespeedAPIFormatStringV2Args
	Format *string
}
