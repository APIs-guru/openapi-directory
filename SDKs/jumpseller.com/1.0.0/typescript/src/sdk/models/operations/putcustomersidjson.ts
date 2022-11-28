import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCustomersIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCustomersIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PutCustomersIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCustomersIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PutCustomersIdJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CustomerWithPasswordNoId;
}


export class PutCustomersIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customer?: shared.Customer;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
