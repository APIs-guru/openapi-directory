import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_select_option_id" })
  customFieldSelectOptionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams;
}


export class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customFieldSelectOption?: shared.CustomFieldSelectOption;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
