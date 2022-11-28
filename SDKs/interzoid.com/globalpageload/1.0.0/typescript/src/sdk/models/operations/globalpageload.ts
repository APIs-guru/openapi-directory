import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GlobalpageloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class Globalpageload200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Origin" })
  origin?: string;

  @SpeakeasyMetadata({ data: "json, name=PageResponseStatus" })
  pageResponseStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=Seconds" })
  seconds?: string;
}


export class GlobalpageloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GlobalpageloadQueryParams;
}


export class GlobalpageloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  globalpageload200ApplicationJsonObject?: Globalpageload200ApplicationJson;
}
