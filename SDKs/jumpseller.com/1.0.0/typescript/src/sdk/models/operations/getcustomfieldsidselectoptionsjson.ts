import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomFieldsIdSelectOptionsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCustomFieldsIdSelectOptionsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomFieldsIdSelectOptionsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomFieldsIdSelectOptionsJsonPathParams;

  @Metadata()
  queryParams: GetCustomFieldsIdSelectOptionsJsonQueryParams;
}


export class GetCustomFieldsIdSelectOptionsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CustomFieldSelectOption })
  customFieldSelectOptions?: shared.CustomFieldSelectOption[];

  @Metadata()
  statusCode: number;
}
