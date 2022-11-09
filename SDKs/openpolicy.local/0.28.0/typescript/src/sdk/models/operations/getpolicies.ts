import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class GetPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPoliciesQueryParams;
}


export class GetPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  twoHundredResult?: shared.TwoHundredResult;

  @Metadata()
  fourHundred?: shared.FourHundred;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
