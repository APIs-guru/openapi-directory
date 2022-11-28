import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomFieldsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomFieldsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCustomFieldsJsonQueryParams;
}


export class GetCustomFieldsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CustomField })
  customFields?: shared.CustomField[];

  @SpeakeasyMetadata()
  statusCode: number;
}
