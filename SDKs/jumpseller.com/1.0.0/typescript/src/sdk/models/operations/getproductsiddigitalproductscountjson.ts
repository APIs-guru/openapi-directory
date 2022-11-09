import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductsIdDigitalProductsCountJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdDigitalProductsCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdDigitalProductsCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdDigitalProductsCountJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdDigitalProductsCountJsonQueryParams;
}


export class GetProductsIdDigitalProductsCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
