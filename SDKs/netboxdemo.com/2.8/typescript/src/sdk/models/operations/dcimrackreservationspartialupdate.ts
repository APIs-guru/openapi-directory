import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRackReservationsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackReservationsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackReservationsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableRackReservation;
}


export class DcimRackReservationsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rackReservation?: shared.RackReservation;

  @Metadata()
  statusCode: number;
}
