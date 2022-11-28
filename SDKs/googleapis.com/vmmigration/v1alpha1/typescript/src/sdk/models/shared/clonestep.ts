import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloneStep
/** 
 * CloneStep holds information about the clone step progress.
**/
export class CloneStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adaptingOs" })
  adaptingOs?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=instantiatingMigratedVm" })
  instantiatingMigratedVm?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=preparingVmDisks" })
  preparingVmDisks?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
