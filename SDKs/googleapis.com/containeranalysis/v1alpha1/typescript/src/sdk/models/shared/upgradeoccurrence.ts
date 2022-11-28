import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpgradeDistribution } from "./upgradedistribution";
import { Version } from "./version";



// UpgradeOccurrence
/** 
 * An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability).
**/
export class UpgradeOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: UpgradeDistribution;

  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: string;

  @SpeakeasyMetadata({ data: "json, name=parsedVersion" })
  parsedVersion?: Version;
}
