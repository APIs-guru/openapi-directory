import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloneStep
/** 
 * CloneStep holds information about the clone step progress.
**/
export class CloneStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=adaptingOs" })
  adaptingOs?: Map<string, any>;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=instantiatingMigratedVm" })
  instantiatingMigratedVm?: Map<string, any>;

  @Metadata({ data: "json, name=preparingVmDisks" })
  preparingVmDisks?: Map<string, any>;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
