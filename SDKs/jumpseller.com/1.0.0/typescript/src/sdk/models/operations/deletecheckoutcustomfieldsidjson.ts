import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCheckoutCustomFieldsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCheckoutCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCheckoutCustomFieldsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCheckoutCustomFieldsIdJsonPathParams;

  @Metadata()
  queryParams: DeleteCheckoutCustomFieldsIdJsonQueryParams;
}


export class DeleteCheckoutCustomFieldsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCheckoutCustomFieldsIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
