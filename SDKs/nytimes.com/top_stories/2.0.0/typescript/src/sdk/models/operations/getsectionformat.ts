import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSectionFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}

export enum GetSectionFormatSectionEnum {
    Home = "home",
    Opinion = "opinion",
    World = "world",
    National = "national",
    Politics = "politics",
    Upshot = "upshot",
    Nyregion = "nyregion",
    Business = "business",
    Technology = "technology",
    Science = "science",
    Health = "health",
    Sports = "sports",
    Arts = "arts",
    Books = "books",
    Movies = "movies",
    Theater = "theater",
    Sundayreview = "sundayreview",
    Fashion = "fashion",
    Tmagazine = "tmagazine",
    Food = "food",
    Travel = "travel",
    Magazine = "magazine",
    Realestate = "realestate",
    Automobiles = "automobiles",
    Obituaries = "obituaries",
    Insider = "insider"
}


export class GetSectionFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetSectionFormatFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: GetSectionFormatSectionEnum;
}


export class GetSectionFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;
}


export class GetSectionFormat200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];
}


export class GetSectionFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSectionFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSectionFormatQueryParams;
}


export class GetSectionFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSectionFormat200ApplicationJsonObject?: GetSectionFormat200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
