import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePagesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeletePagesIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeletePagesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePagesIdJsonPathParams;

  @Metadata()
  queryParams: DeletePagesIdJsonQueryParams;
}


export class DeletePagesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletePagesIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
