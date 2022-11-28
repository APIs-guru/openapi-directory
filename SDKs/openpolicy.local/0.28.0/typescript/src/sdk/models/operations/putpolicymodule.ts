import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutPolicyModulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutPolicyModuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" })
  metrics?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class PutPolicyModuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPolicyModulePathParams;

  @SpeakeasyMetadata()
  queryParams: PutPolicyModuleQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request: string;
}


export class PutPolicyModuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  twoHundredResult?: shared.TwoHundredResult;

  @SpeakeasyMetadata()
  fourHundred?: shared.FourHundred;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
