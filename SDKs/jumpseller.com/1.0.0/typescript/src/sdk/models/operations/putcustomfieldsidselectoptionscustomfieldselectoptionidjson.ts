import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=custom_field_select_option_id" })
  customFieldSelectOptionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams;

  @Metadata()
  queryParams: PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomFieldSelectOptionEdit;
}


export class PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customFieldSelectOption?: shared.CustomFieldSelectOption;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
