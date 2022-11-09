import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProductsIdOptionsOptionIdValuesValueIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=option_id" })
  optionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value_id" })
  valueId: number;
}


export class DeleteProductsIdOptionsOptionIdValuesValueIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsIdOptionsOptionIdValuesValueIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductsIdOptionsOptionIdValuesValueIdJsonPathParams;

  @Metadata()
  queryParams: DeleteProductsIdOptionsOptionIdValuesValueIdJsonQueryParams;
}


export class DeleteProductsIdOptionsOptionIdValuesValueIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteProductsIdOptionsOptionIdValuesValueIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
