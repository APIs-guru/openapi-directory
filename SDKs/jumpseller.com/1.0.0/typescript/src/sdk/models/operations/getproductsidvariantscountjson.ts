import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductsIdVariantsCountJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdVariantsCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdVariantsCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdVariantsCountJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdVariantsCountJsonQueryParams;
}


export class GetProductsIdVariantsCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
