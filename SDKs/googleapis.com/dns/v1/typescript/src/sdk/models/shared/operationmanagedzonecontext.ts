import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedZone } from "./managedzone";



export class OperationManagedZoneContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newValue" })
  newValue?: ManagedZone;

  @SpeakeasyMetadata({ data: "json, name=oldValue" })
  oldValue?: ManagedZone;
}
