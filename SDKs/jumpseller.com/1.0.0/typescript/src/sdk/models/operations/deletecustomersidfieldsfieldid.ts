import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCustomersIdFieldsFieldIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=field_id" })
  fieldId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCustomersIdFieldsFieldIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCustomersIdFieldsFieldIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCustomersIdFieldsFieldIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteCustomersIdFieldsFieldIdQueryParams;
}


export class DeleteCustomersIdFieldsFieldIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteCustomersIdFieldsFieldId200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
