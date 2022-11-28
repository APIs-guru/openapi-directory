import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * ListOperationsResponse is the result of ListOperationsRequest.
**/
export declare class ListOperationsResponse extends SpeakeasyBase {
    missingZones?: string[];
    operations?: Operation[];
}
