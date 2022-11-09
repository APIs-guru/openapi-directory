import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAreasFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetAreasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetAreasFormatEnum;
}


export class GetAreasRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAreasQueryParams;
}


export class GetAreasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
