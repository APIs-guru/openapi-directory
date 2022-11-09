import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRackReservationsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackReservationsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackReservationsReadPathParams;
}


export class DcimRackReservationsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rackReservation?: shared.RackReservation;

  @Metadata()
  statusCode: number;
}
