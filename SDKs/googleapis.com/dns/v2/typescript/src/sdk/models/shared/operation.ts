import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationDnsKeyContext } from "./operationdnskeycontext";
import { OperationManagedZoneContext } from "./operationmanagedzonecontext";


export enum OperationStatusEnum {
    Pending = "PENDING",
    Done = "DONE"
}


// Operation
/** 
 * An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id.
**/
export class Operation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnsKeyContext" })
  dnsKeyContext?: OperationDnsKeyContext;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OperationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=zoneContext" })
  zoneContext?: OperationManagedZoneContext;
}
