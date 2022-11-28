import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableRackReservationInput extends SpeakeasyBase {
    description: string;
    rack: number;
    tenant?: number;
    units: number[];
    user: number;
}
