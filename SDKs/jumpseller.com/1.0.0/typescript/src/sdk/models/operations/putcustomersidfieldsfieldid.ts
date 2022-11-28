import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCustomersIdFieldsFieldIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=field_id" })
  fieldId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCustomersIdFieldsFieldIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutCustomersIdFieldsFieldIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCustomersIdFieldsFieldIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutCustomersIdFieldsFieldIdQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CustomerAdditionalFieldEdit;
}


export class PutCustomersIdFieldsFieldIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badParams?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerAdditionalField?: shared.CustomerAdditionalField;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
