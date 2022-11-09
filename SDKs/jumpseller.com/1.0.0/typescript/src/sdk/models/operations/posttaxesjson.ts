import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTaxesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostTaxesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostTaxesJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TaxEdit;
}


export class PostTaxesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tax?: shared.Tax;
}
