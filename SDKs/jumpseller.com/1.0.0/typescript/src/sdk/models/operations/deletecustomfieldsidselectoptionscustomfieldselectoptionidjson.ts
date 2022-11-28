import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_select_option_id" })
  customFieldSelectOptionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams;
}


export class DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
