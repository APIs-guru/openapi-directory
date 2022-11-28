import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPagesIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPagesIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetPagesIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPagesIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPagesIdJsonQueryParams;
}


export class GetPagesIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  page?: shared.Page;

  @SpeakeasyMetadata()
  statusCode: number;
}
