import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCustomFieldsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutCustomFieldsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCustomFieldsIdJsonPathParams;

  @Metadata()
  queryParams: PutCustomFieldsIdJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomFieldEdit;
}


export class PutCustomFieldsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customField?: shared.CustomField;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
