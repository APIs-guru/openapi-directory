import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPolicyModulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPolicyModuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class GetPolicyModuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPolicyModulePathParams;

  @SpeakeasyMetadata()
  queryParams: GetPolicyModuleQueryParams;
}


export class GetPolicyModuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  twoHundredResult?: shared.TwoHundredResult;

  @SpeakeasyMetadata()
  fourHundred?: shared.FourHundred;

  @SpeakeasyMetadata()
  fourHundredAndFour?: shared.FourHundredAndFour;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
