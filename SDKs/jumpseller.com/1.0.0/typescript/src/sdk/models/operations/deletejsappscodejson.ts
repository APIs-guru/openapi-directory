import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteJsappsCodeJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=code" })
  code: string;
}


export class DeleteJsappsCodeJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteJsappsCodeJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteJsappsCodeJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteJsappsCodeJsonQueryParams;
}


export class DeleteJsappsCodeJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteJsappsCodeJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
