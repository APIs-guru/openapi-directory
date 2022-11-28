import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRackReservationsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackReservationsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRackReservationsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableRackReservationInput;
}


export class DcimRackReservationsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rackReservation?: shared.RackReservation;

  @SpeakeasyMetadata()
  statusCode: number;
}
