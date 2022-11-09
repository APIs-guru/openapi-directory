import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteJsappsCodeJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=code" })
  code: string;
}


export class DeleteJsappsCodeJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteJsappsCodeJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteJsappsCodeJsonPathParams;

  @Metadata()
  queryParams: DeleteJsappsCodeJsonQueryParams;
}


export class DeleteJsappsCodeJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteJsappsCodeJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
