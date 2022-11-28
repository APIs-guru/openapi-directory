import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomFieldsIdSelectOptionsJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCustomFieldsIdSelectOptionsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomFieldsIdSelectOptionsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomFieldsIdSelectOptionsJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomFieldsIdSelectOptionsJsonQueryParams;
}


export class GetCustomFieldsIdSelectOptionsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CustomFieldSelectOption })
  customFieldSelectOptions?: shared.CustomFieldSelectOption[];

  @SpeakeasyMetadata()
  statusCode: number;
}
