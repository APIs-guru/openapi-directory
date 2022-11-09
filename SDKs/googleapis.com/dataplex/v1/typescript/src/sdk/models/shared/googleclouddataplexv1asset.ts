import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1AssetDiscoverySpec } from "./googleclouddataplexv1assetdiscoveryspec";
import { GoogleCloudDataplexV1AssetDiscoveryStatus } from "./googleclouddataplexv1assetdiscoverystatus";
import { GoogleCloudDataplexV1AssetResourceSpec } from "./googleclouddataplexv1assetresourcespec";
import { GoogleCloudDataplexV1AssetResourceStatus } from "./googleclouddataplexv1assetresourcestatus";
import { GoogleCloudDataplexV1AssetSecurityStatus } from "./googleclouddataplexv1assetsecuritystatus";

export enum GoogleCloudDataplexV1AssetStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Creating = "CREATING"
,    Deleting = "DELETING"
,    ActionRequired = "ACTION_REQUIRED"
}


// GoogleCloudDataplexV1Asset
/** 
 * An asset represents a cloud resource that is being managed within a lake as a member of a zone.
**/
export class GoogleCloudDataplexV1Asset extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=discoverySpec" })
  discoverySpec?: GoogleCloudDataplexV1AssetDiscoverySpec;

  @Metadata({ data: "json, name=discoveryStatus" })
  discoveryStatus?: GoogleCloudDataplexV1AssetDiscoveryStatus;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceSpec" })
  resourceSpec?: GoogleCloudDataplexV1AssetResourceSpec;

  @Metadata({ data: "json, name=resourceStatus" })
  resourceStatus?: GoogleCloudDataplexV1AssetResourceStatus;

  @Metadata({ data: "json, name=securityStatus" })
  securityStatus?: GoogleCloudDataplexV1AssetSecurityStatus;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1AssetStateEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
