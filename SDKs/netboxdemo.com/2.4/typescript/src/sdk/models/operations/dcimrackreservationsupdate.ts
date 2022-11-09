import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRackReservationsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackReservationsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackReservationsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableRackReservation;
}


export class DcimRackReservationsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rackReservation?: shared.RackReservation;

  @Metadata()
  statusCode: number;
}
