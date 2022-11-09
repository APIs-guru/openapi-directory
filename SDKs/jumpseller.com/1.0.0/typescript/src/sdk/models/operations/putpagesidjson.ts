import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutPagesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutPagesIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutPagesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPagesIdJsonPathParams;

  @Metadata()
  queryParams: PutPagesIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PageModify;
}


export class PutPagesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  page?: shared.Page;

  @Metadata()
  statusCode: number;
}
