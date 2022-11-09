import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedZone } from "./managedzone";
import { ManagedZone } from "./managedzone";


export class OperationManagedZoneContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=newValue" })
  newValue?: ManagedZone;

  @Metadata({ data: "json, name=oldValue" })
  oldValue?: ManagedZone;
}
