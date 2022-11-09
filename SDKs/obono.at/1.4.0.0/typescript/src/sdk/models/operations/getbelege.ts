import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBelegePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}

export enum GetBelegeFormatEnum {
    Export = "export"
,    Beleg = "beleg"
,    Uuidlist = "uuidlist"
}

export enum GetBelegeOrderEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetBelegeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: GetBelegeFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gte" })
  gte?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lte" })
  lte?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetBelegeOrderEnum;
}


export class GetBelegeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBelegePathParams;

  @Metadata()
  queryParams: GetBelegeQueryParams;
}


export class GetBelegeResponse extends SpeakeasyBase {
  @Metadata()
  belege?: shared.Belege;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
