import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class GetPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPoliciesQueryParams;
}


export class GetPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  twoHundredResult?: shared.TwoHundredResult;

  @SpeakeasyMetadata()
  fourHundred?: shared.FourHundred;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
