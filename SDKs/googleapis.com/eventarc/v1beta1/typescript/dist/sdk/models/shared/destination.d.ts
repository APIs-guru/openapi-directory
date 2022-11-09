import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudRunService } from "./cloudrunservice";
/**
 * Represents a target of an invocation over HTTP.
**/
export declare class Destination extends SpeakeasyBase {
    cloudRunService?: CloudRunService;
}
