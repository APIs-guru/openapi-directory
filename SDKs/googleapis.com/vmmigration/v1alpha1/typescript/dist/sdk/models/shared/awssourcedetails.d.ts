import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
export declare enum AwsSourceDetailsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Failed = "FAILED",
    Active = "ACTIVE"
}
/**
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
export declare class AwsSourceDetailsInput extends SpeakeasyBase {
    accessKeyId?: string;
    awsRegion?: string;
    error?: Status;
    inventorySecurityGroupNames?: string[];
    inventoryTags?: Map<string, string>;
    migrationResourcesUserTags?: Map<string, string>;
    secretAccessKey?: string;
}
/**
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
export declare class AwsSourceDetails extends SpeakeasyBase {
    accessKeyId?: string;
    awsRegion?: string;
    error?: Status;
    inventorySecurityGroupNames?: string[];
    inventoryTags?: Map<string, string>;
    migrationResourcesUserTags?: Map<string, string>;
    publicIp?: string;
    secretAccessKey?: string;
    state?: AwsSourceDetailsStateEnum;
}
