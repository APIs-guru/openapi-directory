import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetProductsStatusStatusJsonStatusEnum {
    Available = "available"
,    NotAvailable = "not-available"
,    Disabled = "disabled"
}


export class GetProductsStatusStatusJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=status" })
  status: GetProductsStatusStatusJsonStatusEnum;
}


export class GetProductsStatusStatusJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsStatusStatusJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsStatusStatusJsonPathParams;

  @Metadata()
  queryParams: GetProductsStatusStatusJsonQueryParams;
}


export class GetProductsStatusStatusJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Product })
  products?: shared.Product[];

  @Metadata()
  statusCode: number;

  @Metadata()
  statusInvalid?: any;
}
