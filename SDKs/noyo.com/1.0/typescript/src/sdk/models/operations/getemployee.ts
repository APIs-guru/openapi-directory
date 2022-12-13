import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}


export class GetEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEmployeePathParams;
}


export class GetEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeResult?: shared.EmployeeResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
