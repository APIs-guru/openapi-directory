import { SpeakeasyBase } from "../../../internal/utils";
import { OperationDnsKeyContext } from "./operationdnskeycontext";
import { OperationManagedZoneContext } from "./operationmanagedzonecontext";
export declare enum OperationStatusEnum {
    Pending = "pending",
    Done = "done"
}
/**
 * An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id.
**/
export declare class Operation extends SpeakeasyBase {
    dnsKeyContext?: OperationDnsKeyContext;
    id?: string;
    kind?: string;
    startTime?: string;
    status?: OperationStatusEnum;
    type?: string;
    user?: string;
    zoneContext?: OperationManagedZoneContext;
}
