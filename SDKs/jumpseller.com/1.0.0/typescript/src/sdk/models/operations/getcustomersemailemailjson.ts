import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomersEmailEmailJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=email" })
  email: string;
}


export class GetCustomersEmailEmailJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomersEmailEmailJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersEmailEmailJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomersEmailEmailJsonQueryParams;
}


export class GetCustomersEmailEmailJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customer?: shared.Customer;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
