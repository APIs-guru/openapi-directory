import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomersIdFieldsFieldIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=field_id" })
  fieldId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCustomersIdFieldsFieldIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomersIdFieldsFieldIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersIdFieldsFieldIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomersIdFieldsFieldIdQueryParams;
}


export class GetCustomersIdFieldsFieldIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerAdditionalField?: shared.CustomerAdditionalField;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
