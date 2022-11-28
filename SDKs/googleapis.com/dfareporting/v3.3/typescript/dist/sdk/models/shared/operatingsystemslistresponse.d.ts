import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystem } from "./operatingsystem";
/**
 * Operating System List Response
**/
export declare class OperatingSystemsListResponse extends SpeakeasyBase {
    kind?: string;
    operatingSystems?: OperatingSystem[];
}
