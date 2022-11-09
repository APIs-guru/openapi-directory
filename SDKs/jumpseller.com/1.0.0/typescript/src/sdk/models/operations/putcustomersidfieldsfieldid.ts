import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCustomersIdFieldsFieldIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=field_id" })
  fieldId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCustomersIdFieldsFieldIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutCustomersIdFieldsFieldIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCustomersIdFieldsFieldIdPathParams;

  @Metadata()
  queryParams: PutCustomersIdFieldsFieldIdQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomerAdditionalFieldEdit;
}


export class PutCustomersIdFieldsFieldIdResponse extends SpeakeasyBase {
  @Metadata()
  badParams?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  customerAdditionalField?: shared.CustomerAdditionalField;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
