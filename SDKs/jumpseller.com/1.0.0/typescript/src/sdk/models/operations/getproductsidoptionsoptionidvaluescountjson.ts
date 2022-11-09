import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductsIdOptionsOptionIdValuesCountJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;
}


export class GetProductsIdOptionsOptionIdValuesCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdOptionsOptionIdValuesCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdOptionsOptionIdValuesCountJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdOptionsOptionIdValuesCountJsonQueryParams;
}


export class GetProductsIdOptionsOptionIdValuesCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
