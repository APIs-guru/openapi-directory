import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePagesIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeletePagesIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeletePagesIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePagesIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeletePagesIdJsonQueryParams;
}


export class DeletePagesIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deletePagesIdJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
