import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPagesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPagesIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetPagesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPagesIdJsonPathParams;

  @Metadata()
  queryParams: GetPagesIdJsonQueryParams;
}


export class GetPagesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  page?: shared.Page;

  @Metadata()
  statusCode: number;
}
