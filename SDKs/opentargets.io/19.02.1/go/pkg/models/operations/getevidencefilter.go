package operations

type GetEvidenceFilterQueryParams struct {
	DataSource    *string  `queryParam:"style=form,explode=true,name=data source"`
	Datastructure *string  `queryParam:"style=form,explode=true,name=datastructure"`
	Datatype      *string  `queryParam:"style=form,explode=true,name=datatype"`
	Disease       *string  `queryParam:"style=form,explode=true,name=disease"`
	Fields        *string  `queryParam:"style=form,explode=true,name=fields"`
	Format        *string  `queryParam:"style=form,explode=true,name=format"`
	From          *float64 `queryParam:"style=form,explode=true,name=from"`
	Pathway       *string  `queryParam:"style=form,explode=true,name=pathway"`
	ScorevalueMax *float32 `queryParam:"style=form,explode=true,name=scorevalue_max"`
	ScorevalueMin *float32 `queryParam:"style=form,explode=true,name=scorevalue_min"`
	Size          *float64 `queryParam:"style=form,explode=true,name=size"`
	Sort          *string  `queryParam:"style=form,explode=true,name=sort"`
	Target        *string  `queryParam:"style=form,explode=true,name=target"`
	Uniprotkw     *string  `queryParam:"style=form,explode=true,name=uniprotkw"`
}

type GetEvidenceFilterRequest struct {
	QueryParams GetEvidenceFilterQueryParams
}

type GetEvidenceFilterResponse struct {
	ContentType string
	StatusCode  int64
}
