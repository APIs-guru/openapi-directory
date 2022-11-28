import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";


export enum AwsSourceDetailsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Failed = "FAILED",
    Active = "ACTIVE"
}


// AwsSourceDetailsInput
/** 
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
export class AwsSourceDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=inventorySecurityGroupNames" })
  inventorySecurityGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=inventoryTags" })
  inventoryTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=migrationResourcesUserTags" })
  migrationResourcesUserTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=secretAccessKey" })
  secretAccessKey?: string;
}


// AwsSourceDetails
/** 
 * AwsSourceDetails message describes a specific source details for the AWS source type.
**/
export class AwsSourceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=awsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=inventorySecurityGroupNames" })
  inventorySecurityGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=inventoryTags" })
  inventoryTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=migrationResourcesUserTags" })
  migrationResourcesUserTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=publicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ data: "json, name=secretAccessKey" })
  secretAccessKey?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AwsSourceDetailsStateEnum;
}
