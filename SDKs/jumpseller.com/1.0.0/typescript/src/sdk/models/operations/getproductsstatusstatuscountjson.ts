import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetProductsStatusStatusCountJsonStatusEnum {
    Available = "available"
,    NotAvailable = "not-available"
,    Disabled = "disabled"
}


export class GetProductsStatusStatusCountJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=status" })
  status: GetProductsStatusStatusCountJsonStatusEnum;
}


export class GetProductsStatusStatusCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsStatusStatusCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsStatusStatusCountJsonPathParams;

  @Metadata()
  queryParams: GetProductsStatusStatusCountJsonQueryParams;
}


export class GetProductsStatusStatusCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  statusInvalid?: any;
}
