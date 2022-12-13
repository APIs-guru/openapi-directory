import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class CreateEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateEmployeePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EmployeeCreateRequest;
}


export class CreateEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeResult?: shared.EmployeeResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
