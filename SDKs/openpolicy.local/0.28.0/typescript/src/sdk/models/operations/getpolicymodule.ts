import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPolicyModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPolicyModuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class GetPolicyModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPolicyModulePathParams;

  @Metadata()
  queryParams: GetPolicyModuleQueryParams;
}


export class GetPolicyModuleResponse extends SpeakeasyBase {
  @Metadata()
  twoHundredResult?: shared.TwoHundredResult;

  @Metadata()
  fourHundred?: shared.FourHundred;

  @Metadata()
  fourHundredAndFour?: shared.FourHundredAndFour;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
