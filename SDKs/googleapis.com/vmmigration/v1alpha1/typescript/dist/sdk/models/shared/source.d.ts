import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSourceDetails } from "./awssourcedetails";
import { Status } from "./status";
import { VmwareSourceDetails } from "./vmwaresourcedetails";
import { AwsSourceDetailsInput } from "./awssourcedetails";
/**
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
**/
export declare class Source extends SpeakeasyBase {
    aws?: AwsSourceDetails;
    createTime?: string;
    description?: string;
    error?: Status;
    labels?: Map<string, string>;
    name?: string;
    updateTime?: string;
    vmware?: VmwareSourceDetails;
}
/**
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
**/
export declare class SourceInput extends SpeakeasyBase {
    aws?: AwsSourceDetailsInput;
    description?: string;
    error?: Status;
    labels?: Map<string, string>;
    vmware?: VmwareSourceDetails;
}
