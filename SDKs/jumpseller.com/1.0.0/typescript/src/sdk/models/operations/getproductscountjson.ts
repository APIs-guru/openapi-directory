import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProductsCountJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsCountJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProductsCountJsonQueryParams;
}


export class GetProductsCountJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  count?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
