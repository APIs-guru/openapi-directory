import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDependentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}


export class CreateDependentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDependentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DependentCreateRequest;
}


export class CreateDependentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dependentResult?: shared.DependentResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
