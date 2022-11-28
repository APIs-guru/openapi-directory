import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCustomFieldsIdSelectOptionsJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostCustomFieldsIdSelectOptionsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostCustomFieldsIdSelectOptionsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCustomFieldsIdSelectOptionsJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PostCustomFieldsIdSelectOptionsJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CustomFieldSelectOptionEdit;
}


export class PostCustomFieldsIdSelectOptionsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customFieldSelectOption?: shared.CustomFieldSelectOption;

  @SpeakeasyMetadata()
  statusCode: number;
}
