import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCustomersCountJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomersCountJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCustomersCountJsonQueryParams;
}


export class GetCustomersCountJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  count?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
