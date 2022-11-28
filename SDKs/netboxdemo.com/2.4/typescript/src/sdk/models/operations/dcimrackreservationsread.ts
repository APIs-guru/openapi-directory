import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRackReservationsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackReservationsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRackReservationsReadPathParams;
}


export class DcimRackReservationsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rackReservation?: shared.RackReservation;

  @SpeakeasyMetadata()
  statusCode: number;
}
