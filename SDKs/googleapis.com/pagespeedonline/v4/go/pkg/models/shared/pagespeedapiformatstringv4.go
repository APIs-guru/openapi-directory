package shared

type PagespeedAPIFormatStringV4ArgsRects struct {
	Height *int32
	Left   *int32
	Top    *int32
	Width  *int32
}

type PagespeedAPIFormatStringV4ArgsSecondaryRects struct {
	Height *int32
	Left   *int32
	Top    *int32
	Width  *int32
}

type PagespeedAPIFormatStringV4Args struct {
	Key            *string
	Rects          []PagespeedAPIFormatStringV4ArgsRects
	SecondaryRects []PagespeedAPIFormatStringV4ArgsSecondaryRects
	Type           *string
	Value          *string
}

type PagespeedAPIFormatStringV4 struct {
	Args   []PagespeedAPIFormatStringV4Args
	Format *string
}
