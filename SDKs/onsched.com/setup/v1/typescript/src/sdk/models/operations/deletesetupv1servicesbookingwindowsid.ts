import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSetupV1ServicesBookingwindowsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ServicesBookingwindowsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSetupV1ServicesBookingwindowsIdPathParams;
}


export class DeleteSetupV1ServicesBookingwindowsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
