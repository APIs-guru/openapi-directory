import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSectionFormatFormatEnum {
    Json = "json"
,    Jsonp = "jsonp"
}

export enum GetSectionFormatSectionEnum {
    Home = "home"
,    Opinion = "opinion"
,    World = "world"
,    National = "national"
,    Politics = "politics"
,    Upshot = "upshot"
,    Nyregion = "nyregion"
,    Business = "business"
,    Technology = "technology"
,    Science = "science"
,    Health = "health"
,    Sports = "sports"
,    Arts = "arts"
,    Books = "books"
,    Movies = "movies"
,    Theater = "theater"
,    Sundayreview = "sundayreview"
,    Fashion = "fashion"
,    Tmagazine = "tmagazine"
,    Food = "food"
,    Travel = "travel"
,    Magazine = "magazine"
,    Realestate = "realestate"
,    Automobiles = "automobiles"
,    Obituaries = "obituaries"
,    Insider = "insider"
}


export class GetSectionFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetSectionFormatFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: GetSectionFormatSectionEnum;
}


export class GetSectionFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetSectionFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSectionFormatPathParams;

  @Metadata()
  queryParams: GetSectionFormatQueryParams;
}


export class GetSectionFormat200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];
}


export class GetSectionFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSectionFormat200ApplicationJsonObject?: GetSectionFormat200ApplicationJson;

  @Metadata()
  statusCode: number;
}
