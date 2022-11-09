import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCustomFieldsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCustomFieldsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCustomFieldsJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomFieldEdit;
}


export class PostCustomFieldsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customField?: shared.CustomField;

  @Metadata()
  statusCode: number;
}
