import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemVersion } from "./operatingsystemversion";
/**
 * Operating System Version List Response
**/
export declare class OperatingSystemVersionsListResponse extends SpeakeasyBase {
    kind?: string;
    operatingSystemVersions?: OperatingSystemVersion[];
}
