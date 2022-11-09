import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductsIdOptionsCountJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdOptionsCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdOptionsCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdOptionsCountJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdOptionsCountJsonQueryParams;
}


export class GetProductsIdOptionsCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
