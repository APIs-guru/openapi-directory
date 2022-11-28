import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1AppointmentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1AppointmentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1AppointmentsIdPathParams;
}


export class GetSetupV1AppointmentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appointmentViewModel?: shared.AppointmentViewModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
