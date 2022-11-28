import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackReservationsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRackReservationsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRackReservationsPartialUpdatePathParams;
    request: shared.WritableRackReservationInput;
}
export declare class DcimRackReservationsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rackReservation?: shared.RackReservation;
    statusCode: number;
}
