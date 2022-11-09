import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSetupV1ServicesBookingwindowsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ServicesBookingwindowsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1ServicesBookingwindowsIdPathParams;
}


export class DeleteSetupV1ServicesBookingwindowsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
