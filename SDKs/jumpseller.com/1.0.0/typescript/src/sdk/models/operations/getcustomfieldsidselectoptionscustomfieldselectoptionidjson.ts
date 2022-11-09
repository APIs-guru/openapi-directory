import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=custom_field_select_option_id" })
  customFieldSelectOptionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams;

  @Metadata()
  queryParams: GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams;
}


export class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customFieldSelectOption?: shared.CustomFieldSelectOption;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
