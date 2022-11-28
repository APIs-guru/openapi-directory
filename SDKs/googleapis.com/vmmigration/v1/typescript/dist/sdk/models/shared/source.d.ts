import { SpeakeasyBase } from "../../../internal/utils";
import { VmwareSourceDetails } from "./vmwaresourcedetails";
/**
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
**/
export declare class Source extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    updateTime?: string;
    vmware?: VmwareSourceDetails;
}
/**
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
**/
export declare class SourceInput extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, string>;
    vmware?: VmwareSourceDetails;
}
