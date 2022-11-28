import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFulfillmentsCountJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetFulfillmentsCountJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFulfillmentsCountJsonQueryParams;
}


export class GetFulfillmentsCountJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  count?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
