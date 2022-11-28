import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetDiscoverySpec } from "./googleclouddataplexv1assetdiscoveryspec";
import { GoogleCloudDataplexV1AssetDiscoveryStatus } from "./googleclouddataplexv1assetdiscoverystatus";
import { GoogleCloudDataplexV1AssetResourceSpec } from "./googleclouddataplexv1assetresourcespec";
import { GoogleCloudDataplexV1AssetResourceStatus } from "./googleclouddataplexv1assetresourcestatus";
import { GoogleCloudDataplexV1AssetSecurityStatus } from "./googleclouddataplexv1assetsecuritystatus";


export enum GoogleCloudDataplexV1AssetStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}


// GoogleCloudDataplexV1AssetInput
/** 
 * An asset represents a cloud resource that is being managed within a lake as a member of a zone.
**/
export class GoogleCloudDataplexV1AssetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discoverySpec" })
  discoverySpec?: GoogleCloudDataplexV1AssetDiscoverySpec;

  @SpeakeasyMetadata({ data: "json, name=discoveryStatus" })
  discoveryStatus?: GoogleCloudDataplexV1AssetDiscoveryStatus;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceSpec" })
  resourceSpec?: GoogleCloudDataplexV1AssetResourceSpec;

  @SpeakeasyMetadata({ data: "json, name=resourceStatus" })
  resourceStatus?: GoogleCloudDataplexV1AssetResourceStatus;

  @SpeakeasyMetadata({ data: "json, name=securityStatus" })
  securityStatus?: GoogleCloudDataplexV1AssetSecurityStatus;
}


// GoogleCloudDataplexV1Asset
/** 
 * An asset represents a cloud resource that is being managed within a lake as a member of a zone.
**/
export class GoogleCloudDataplexV1Asset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discoverySpec" })
  discoverySpec?: GoogleCloudDataplexV1AssetDiscoverySpec;

  @SpeakeasyMetadata({ data: "json, name=discoveryStatus" })
  discoveryStatus?: GoogleCloudDataplexV1AssetDiscoveryStatus;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceSpec" })
  resourceSpec?: GoogleCloudDataplexV1AssetResourceSpec;

  @SpeakeasyMetadata({ data: "json, name=resourceStatus" })
  resourceStatus?: GoogleCloudDataplexV1AssetResourceStatus;

  @SpeakeasyMetadata({ data: "json, name=securityStatus" })
  securityStatus?: GoogleCloudDataplexV1AssetSecurityStatus;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1AssetStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
