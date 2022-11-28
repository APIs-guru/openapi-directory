import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetProductsStatusStatusCountJsonStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}


export class GetProductsStatusStatusCountJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status" })
  status: GetProductsStatusStatusCountJsonStatusEnum;
}


export class GetProductsStatusStatusCountJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsStatusStatusCountJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductsStatusStatusCountJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProductsStatusStatusCountJsonQueryParams;
}


export class GetProductsStatusStatusCountJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  count?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  statusInvalid?: any;
}
