import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCustomFieldsIdSelectOptionsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostCustomFieldsIdSelectOptionsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCustomFieldsIdSelectOptionsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCustomFieldsIdSelectOptionsJsonPathParams;

  @Metadata()
  queryParams: PostCustomFieldsIdSelectOptionsJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomFieldSelectOptionEdit;
}


export class PostCustomFieldsIdSelectOptionsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customFieldSelectOption?: shared.CustomFieldSelectOption;

  @Metadata()
  statusCode: number;
}
