import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class EditEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditEmployeePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EmployeeEditRequest;
}


export class EditEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeResult?: shared.EmployeeResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
