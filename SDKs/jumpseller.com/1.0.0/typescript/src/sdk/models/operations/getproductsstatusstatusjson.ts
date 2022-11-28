import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetProductsStatusStatusJsonStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}


export class GetProductsStatusStatusJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status" })
  status: GetProductsStatusStatusJsonStatusEnum;
}


export class GetProductsStatusStatusJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsStatusStatusJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductsStatusStatusJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProductsStatusStatusJsonQueryParams;
}


export class GetProductsStatusStatusJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Product })
  products?: shared.Product[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  statusInvalid?: any;
}
