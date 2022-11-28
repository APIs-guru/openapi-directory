import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBelegePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}

export enum GetBelegeFormatEnum {
    Export = "export",
    Beleg = "beleg",
    Uuidlist = "uuidlist"
}

export enum GetBelegeOrderEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetBelegeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: GetBelegeFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gte" })
  gte?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lte" })
  lte?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetBelegeOrderEnum;
}


export class GetBelegeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBelegePathParams;

  @SpeakeasyMetadata()
  queryParams: GetBelegeQueryParams;
}


export class GetBelegeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  belege?: shared.Belege;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
