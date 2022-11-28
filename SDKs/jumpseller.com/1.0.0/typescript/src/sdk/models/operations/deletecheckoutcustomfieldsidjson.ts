import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCheckoutCustomFieldsIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCheckoutCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCheckoutCustomFieldsIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCheckoutCustomFieldsIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteCheckoutCustomFieldsIdJsonQueryParams;
}


export class DeleteCheckoutCustomFieldsIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteCheckoutCustomFieldsIdJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
