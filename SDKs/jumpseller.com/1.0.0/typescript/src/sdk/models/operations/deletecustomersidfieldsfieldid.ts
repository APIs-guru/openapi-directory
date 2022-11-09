import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCustomersIdFieldsFieldIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=field_id" })
  fieldId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCustomersIdFieldsFieldIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCustomersIdFieldsFieldIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCustomersIdFieldsFieldIdPathParams;

  @Metadata()
  queryParams: DeleteCustomersIdFieldsFieldIdQueryParams;
}


export class DeleteCustomersIdFieldsFieldIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCustomersIdFieldsFieldId200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
