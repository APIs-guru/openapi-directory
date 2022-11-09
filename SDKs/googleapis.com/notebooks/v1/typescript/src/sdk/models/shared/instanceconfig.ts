import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceConfig
/** 
 * Notebook instance configurations that can be updated.
**/
export class InstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableHealthMonitoring" })
  enableHealthMonitoring?: boolean;

  @Metadata({ data: "json, name=notebookUpgradeSchedule" })
  notebookUpgradeSchedule?: string;
}
