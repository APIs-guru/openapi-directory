import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetDiscoverySpec } from "./googleclouddataplexv1assetdiscoveryspec";
import { GoogleCloudDataplexV1AssetDiscoveryStatus } from "./googleclouddataplexv1assetdiscoverystatus";
import { GoogleCloudDataplexV1AssetResourceSpec } from "./googleclouddataplexv1assetresourcespec";
import { GoogleCloudDataplexV1AssetResourceStatus } from "./googleclouddataplexv1assetresourcestatus";
import { GoogleCloudDataplexV1AssetSecurityStatus } from "./googleclouddataplexv1assetsecuritystatus";
export declare enum GoogleCloudDataplexV1AssetStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * An asset represents a cloud resource that is being managed within a lake as a member of a zone.
**/
export declare class GoogleCloudDataplexV1AssetInput extends SpeakeasyBase {
    description?: string;
    discoverySpec?: GoogleCloudDataplexV1AssetDiscoverySpec;
    discoveryStatus?: GoogleCloudDataplexV1AssetDiscoveryStatus;
    displayName?: string;
    labels?: Map<string, string>;
    resourceSpec?: GoogleCloudDataplexV1AssetResourceSpec;
    resourceStatus?: GoogleCloudDataplexV1AssetResourceStatus;
    securityStatus?: GoogleCloudDataplexV1AssetSecurityStatus;
}
/**
 * An asset represents a cloud resource that is being managed within a lake as a member of a zone.
**/
export declare class GoogleCloudDataplexV1Asset extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    discoverySpec?: GoogleCloudDataplexV1AssetDiscoverySpec;
    discoveryStatus?: GoogleCloudDataplexV1AssetDiscoveryStatus;
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    resourceSpec?: GoogleCloudDataplexV1AssetResourceSpec;
    resourceStatus?: GoogleCloudDataplexV1AssetResourceStatus;
    securityStatus?: GoogleCloudDataplexV1AssetSecurityStatus;
    state?: GoogleCloudDataplexV1AssetStateEnum;
    uid?: string;
    updateTime?: string;
}
