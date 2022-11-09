import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteHooksIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteHooksIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteHooksIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteHooksIdJsonPathParams;

  @Metadata()
  queryParams: DeleteHooksIdJsonQueryParams;
}


export class DeleteHooksIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteHooksIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
