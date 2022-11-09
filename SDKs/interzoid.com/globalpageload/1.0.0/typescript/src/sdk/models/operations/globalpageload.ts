import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GlobalpageloadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GlobalpageloadRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GlobalpageloadQueryParams;
}


export class Globalpageload200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Contents" })
  contents?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Origin" })
  origin?: string;

  @Metadata({ data: "json, name=PageResponseStatus" })
  pageResponseStatus?: string;

  @Metadata({ data: "json, name=Seconds" })
  seconds?: string;
}


export class GlobalpageloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  globalpageload200ApplicationJsonObject?: Globalpageload200ApplicationJson;
}
