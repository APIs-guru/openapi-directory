import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrdersCountJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetOrdersCountJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOrdersCountJsonQueryParams;
}


export class GetOrdersCountJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  count?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
