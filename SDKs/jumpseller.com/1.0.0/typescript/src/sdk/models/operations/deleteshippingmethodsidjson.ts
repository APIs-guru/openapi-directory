import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteShippingMethodsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteShippingMethodsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteShippingMethodsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteShippingMethodsIdJsonPathParams;

  @Metadata()
  queryParams: DeleteShippingMethodsIdJsonQueryParams;
}


export class DeleteShippingMethodsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteShippingMethodsIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
