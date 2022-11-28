import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackReservationsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRackReservationsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRackReservationsUpdatePathParams;
    request: shared.WritableRackReservationInput;
}
export declare class DcimRackReservationsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rackReservation?: shared.RackReservation;
    statusCode: number;
}
