import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAddonEnum {
    Continent = "continent"
,    Country = "country"
,    Region = "region"
,    City = "city"
,    Geotargeting = "geotargeting"
,    CountryGroupings = "country_groupings"
,    TimeZoneInfo = "time_zone_info"
}

export enum GetFormatEnum {
    Json = "json"
,    Xml = "xml"
}

export enum GetLangEnum {
    Ar = "ar"
,    Cs = "cs"
,    Da = "da"
,    De = "de"
,    En = "en"
,    Es = "es"
,    Et = "et"
,    Fi = "fi"
,    Fr = "fr"
,    Ga = "ga"
,    It = "it"
,    Ja = "ja"
,    Ko = "ko"
,    Ms = "ms"
,    Nl = "nl"
,    Pt = "pt"
,    Ru = "ru"
,    Sv = "sv"
,    Tr = "tr"
,    Vi = "vi"
,    ZhCn = "zh-cn"
,    ZhTw = "zh-tw"
}

export enum GetPackageEnum {
    Ws1 = "WS1"
,    Ws2 = "WS2"
,    Ws3 = "WS3"
,    Ws4 = "WS4"
,    Ws5 = "WS5"
,    Ws6 = "WS6"
,    Ws7 = "WS7"
,    Ws8 = "WS8"
,    Ws9 = "WS9"
,    Ws10 = "WS10"
,    Ws11 = "WS11"
,    Ws12 = "WS12"
,    Ws13 = "WS13"
,    Ws14 = "WS14"
,    Ws15 = "WS15"
,    Ws16 = "WS16"
,    Ws17 = "WS17"
,    Ws18 = "WS18"
,    Ws19 = "WS19"
,    Ws20 = "WS20"
,    Ws21 = "WS21"
,    Ws22 = "WS22"
,    Ws23 = "WS23"
,    Ws24 = "WS24"
,    Ws25 = "WS25"
}


export class GetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=addon" })
  addon?: GetAddonEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: GetLangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: GetPackageEnum;
}


export class GetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQueryParams;
}


export class GetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  get200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
