import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpgradeDistribution
/** 
 * The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.
**/
export class UpgradeDistribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification?: string;

  @Metadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @Metadata({ data: "json, name=cve" })
  cve?: string[];

  @Metadata({ data: "json, name=severity" })
  severity?: string;
}
