import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PackageData } from "./packagedata";


// AnalyzePackagesRequest
/** 
 * AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
**/
export class AnalyzePackagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=packages", elemType: shared.PackageData })
  packages?: PackageData[];

  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string;
}
