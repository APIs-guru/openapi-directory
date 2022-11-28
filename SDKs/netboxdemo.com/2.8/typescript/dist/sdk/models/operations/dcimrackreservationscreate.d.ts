import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackReservationsCreateRequest extends SpeakeasyBase {
    request: shared.WritableRackReservationInput;
}
export declare class DcimRackReservationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    rackReservation?: shared.RackReservation;
    statusCode: number;
}
