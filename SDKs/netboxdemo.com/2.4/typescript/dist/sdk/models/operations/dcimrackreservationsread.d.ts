import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackReservationsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRackReservationsReadRequest extends SpeakeasyBase {
    pathParams: DcimRackReservationsReadPathParams;
}
export declare class DcimRackReservationsReadResponse extends SpeakeasyBase {
    contentType: string;
    rackReservation?: shared.RackReservation;
    statusCode: number;
}
