import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceConfig
/** 
 * Notebook instance configurations that can be updated.
**/
export class InstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableHealthMonitoring" })
  enableHealthMonitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notebookUpgradeSchedule" })
  notebookUpgradeSchedule?: string;
}
