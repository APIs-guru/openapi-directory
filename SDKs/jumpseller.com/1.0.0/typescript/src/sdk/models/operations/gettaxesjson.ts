import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTaxesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetTaxesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTaxesJsonQueryParams;
}


export class GetTaxesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Tax })
  taxes?: shared.Tax[];
}
