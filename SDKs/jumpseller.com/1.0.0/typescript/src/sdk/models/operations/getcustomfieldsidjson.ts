import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomFieldsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomFieldsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomFieldsIdJsonPathParams;

  @Metadata()
  queryParams: GetCustomFieldsIdJsonQueryParams;
}


export class GetCustomFieldsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customField?: shared.CustomField;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
