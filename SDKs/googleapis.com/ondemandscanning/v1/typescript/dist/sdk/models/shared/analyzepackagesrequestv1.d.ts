import { SpeakeasyBase } from "../../../internal/utils";
import { PackageData } from "./packagedata";
/**
 * AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
**/
export declare class AnalyzePackagesRequestV1 extends SpeakeasyBase {
    includeOsvData?: boolean;
    packages?: PackageData[];
    resourceUri?: string;
}
