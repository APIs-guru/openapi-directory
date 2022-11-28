import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    Inout = "INOUT"
}
/**
 * Input or output argument of a function or stored procedure.
**/
export declare class GoogleCloudDatacatalogV1RoutineSpecArgument extends SpeakeasyBase {
    mode?: GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum;
    name?: string;
    type?: string;
}
