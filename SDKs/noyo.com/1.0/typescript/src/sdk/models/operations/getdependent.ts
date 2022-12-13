import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDependentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dependent_id" })
  dependentId: string;
}


export class GetDependentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDependentPathParams;
}


export class GetDependentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependentResult?: shared.DependentResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
