import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomersIdFieldsFieldIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=field_id" })
  fieldId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCustomersIdFieldsFieldIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomersIdFieldsFieldIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomersIdFieldsFieldIdPathParams;

  @Metadata()
  queryParams: GetCustomersIdFieldsFieldIdQueryParams;
}


export class GetCustomersIdFieldsFieldIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerAdditionalField?: shared.CustomerAdditionalField;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
