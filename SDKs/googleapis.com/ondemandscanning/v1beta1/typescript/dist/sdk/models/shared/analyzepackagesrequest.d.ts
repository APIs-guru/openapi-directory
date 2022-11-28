import { SpeakeasyBase } from "../../../internal/utils";
import { PackageData } from "./packagedata";
/**
 * AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
**/
export declare class AnalyzePackagesRequest extends SpeakeasyBase {
    packages?: PackageData[];
    resourceUri?: string;
}
