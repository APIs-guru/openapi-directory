import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductsCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetProductsCountJsonQueryParams;
}


export class GetProductsCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  statusCode: number;
}
