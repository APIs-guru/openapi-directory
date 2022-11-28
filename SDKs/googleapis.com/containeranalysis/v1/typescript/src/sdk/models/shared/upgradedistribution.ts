import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpgradeDistribution
/** 
 * The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.
**/
export class UpgradeDistribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=cve" })
  cve?: string[];

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;
}
