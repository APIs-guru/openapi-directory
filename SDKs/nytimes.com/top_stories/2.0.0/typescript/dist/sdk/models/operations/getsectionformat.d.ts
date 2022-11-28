import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSectionFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}
export declare enum GetSectionFormatSectionEnum {
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
export declare class GetSectionFormatPathParams extends SpeakeasyBase {
    format: GetSectionFormatFormatEnum;
    section: GetSectionFormatSectionEnum;
}
export declare class GetSectionFormatQueryParams extends SpeakeasyBase {
    callback?: string;
}
export declare class GetSectionFormat200ApplicationJson extends SpeakeasyBase {
    results?: shared.Article[];
}
export declare class GetSectionFormatRequest extends SpeakeasyBase {
    pathParams: GetSectionFormatPathParams;
    queryParams: GetSectionFormatQueryParams;
}
export declare class GetSectionFormatResponse extends SpeakeasyBase {
    contentType: string;
    getSectionFormat200ApplicationJsonObject?: GetSectionFormat200ApplicationJson;
    statusCode: number;
}
