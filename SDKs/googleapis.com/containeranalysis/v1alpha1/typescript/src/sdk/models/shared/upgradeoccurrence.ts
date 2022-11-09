import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpgradeDistribution } from "./upgradedistribution";
import { Version } from "./version";


// UpgradeOccurrence
/** 
 * An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability).
**/
export class UpgradeOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=distribution" })
  distribution?: UpgradeDistribution;

  @Metadata({ data: "json, name=package" })
  package?: string;

  @Metadata({ data: "json, name=parsedVersion" })
  parsedVersion?: Version;
}
