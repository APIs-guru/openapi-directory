import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomFieldsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomFieldsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCustomFieldsJsonQueryParams;
}


export class GetCustomFieldsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CustomField })
  customFields?: shared.CustomField[];

  @Metadata()
  statusCode: number;
}
