package operations

import (
	"openapi/pkg/models/shared"
)

type GetSectionFormatFormatEnum string

const (
	GetSectionFormatFormatEnumJSON  GetSectionFormatFormatEnum = "json"
	GetSectionFormatFormatEnumJsonp GetSectionFormatFormatEnum = "jsonp"
)

type GetSectionFormatSectionEnum string

const (
	GetSectionFormatSectionEnumHome         GetSectionFormatSectionEnum = "home"
	GetSectionFormatSectionEnumOpinion      GetSectionFormatSectionEnum = "opinion"
	GetSectionFormatSectionEnumWorld        GetSectionFormatSectionEnum = "world"
	GetSectionFormatSectionEnumNational     GetSectionFormatSectionEnum = "national"
	GetSectionFormatSectionEnumPolitics     GetSectionFormatSectionEnum = "politics"
	GetSectionFormatSectionEnumUpshot       GetSectionFormatSectionEnum = "upshot"
	GetSectionFormatSectionEnumNyregion     GetSectionFormatSectionEnum = "nyregion"
	GetSectionFormatSectionEnumBusiness     GetSectionFormatSectionEnum = "business"
	GetSectionFormatSectionEnumTechnology   GetSectionFormatSectionEnum = "technology"
	GetSectionFormatSectionEnumScience      GetSectionFormatSectionEnum = "science"
	GetSectionFormatSectionEnumHealth       GetSectionFormatSectionEnum = "health"
	GetSectionFormatSectionEnumSports       GetSectionFormatSectionEnum = "sports"
	GetSectionFormatSectionEnumArts         GetSectionFormatSectionEnum = "arts"
	GetSectionFormatSectionEnumBooks        GetSectionFormatSectionEnum = "books"
	GetSectionFormatSectionEnumMovies       GetSectionFormatSectionEnum = "movies"
	GetSectionFormatSectionEnumTheater      GetSectionFormatSectionEnum = "theater"
	GetSectionFormatSectionEnumSundayreview GetSectionFormatSectionEnum = "sundayreview"
	GetSectionFormatSectionEnumFashion      GetSectionFormatSectionEnum = "fashion"
	GetSectionFormatSectionEnumTmagazine    GetSectionFormatSectionEnum = "tmagazine"
	GetSectionFormatSectionEnumFood         GetSectionFormatSectionEnum = "food"
	GetSectionFormatSectionEnumTravel       GetSectionFormatSectionEnum = "travel"
	GetSectionFormatSectionEnumMagazine     GetSectionFormatSectionEnum = "magazine"
	GetSectionFormatSectionEnumRealestate   GetSectionFormatSectionEnum = "realestate"
	GetSectionFormatSectionEnumAutomobiles  GetSectionFormatSectionEnum = "automobiles"
	GetSectionFormatSectionEnumObituaries   GetSectionFormatSectionEnum = "obituaries"
	GetSectionFormatSectionEnumInsider      GetSectionFormatSectionEnum = "insider"
)

type GetSectionFormatPathParams struct {
	Format  GetSectionFormatFormatEnum  `pathParam:"style=simple,explode=false,name=format"`
	Section GetSectionFormatSectionEnum `pathParam:"style=simple,explode=false,name=section"`
}

type GetSectionFormatQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
}

type GetSectionFormat200ApplicationJSON struct {
	Results []shared.Article `json:"results,omitempty"`
}

type GetSectionFormatRequest struct {
	PathParams  GetSectionFormatPathParams
	QueryParams GetSectionFormatQueryParams
}

type GetSectionFormatResponse struct {
	ContentType                              string
	GetSectionFormat200ApplicationJSONObject *GetSectionFormat200ApplicationJSON
	StatusCode                               int64
}
