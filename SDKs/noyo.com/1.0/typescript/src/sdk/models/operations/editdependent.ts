import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditDependentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dependent_id" })
  dependentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditDependentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditDependentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DependentEditRequest;
}


export class EditDependentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependentResult?: shared.DependentResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
