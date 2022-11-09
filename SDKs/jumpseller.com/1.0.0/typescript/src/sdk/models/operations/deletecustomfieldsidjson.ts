import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCustomFieldsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCustomFieldsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCustomFieldsIdJsonPathParams;

  @Metadata()
  queryParams: DeleteCustomFieldsIdJsonQueryParams;
}


export class DeleteCustomFieldsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCustomFieldsIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
