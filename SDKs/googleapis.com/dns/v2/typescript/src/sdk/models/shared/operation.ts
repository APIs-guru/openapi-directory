import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationDnsKeyContext } from "./operationdnskeycontext";
import { OperationManagedZoneContext } from "./operationmanagedzonecontext";

export enum OperationStatusEnum {
    Pending = "PENDING"
,    Done = "DONE"
}


// Operation
/** 
 * An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id.
**/
export class Operation extends SpeakeasyBase {
  @Metadata({ data: "json, name=dnsKeyContext" })
  dnsKeyContext?: OperationDnsKeyContext;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: OperationStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;

  @Metadata({ data: "json, name=zoneContext" })
  zoneContext?: OperationManagedZoneContext;
}
