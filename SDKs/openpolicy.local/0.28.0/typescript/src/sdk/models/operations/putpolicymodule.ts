import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutPolicyModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutPolicyModuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=metrics" })
  metrics?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty?: boolean;
}


export class PutPolicyModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPolicyModulePathParams;

  @Metadata()
  queryParams: PutPolicyModuleQueryParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request: string;
}


export class PutPolicyModuleResponse extends SpeakeasyBase {
  @Metadata()
  twoHundredResult?: shared.TwoHundredResult;

  @Metadata()
  fourHundred?: shared.FourHundred;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
