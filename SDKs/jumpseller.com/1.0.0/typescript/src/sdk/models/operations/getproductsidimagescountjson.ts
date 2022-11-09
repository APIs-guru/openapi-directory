import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductsIdImagesCountJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdImagesCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdImagesCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdImagesCountJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdImagesCountJsonQueryParams;
}


export class GetProductsIdImagesCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
