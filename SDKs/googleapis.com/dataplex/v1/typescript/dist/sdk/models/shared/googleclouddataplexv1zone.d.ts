import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetStatus } from "./googleclouddataplexv1assetstatus";
import { GoogleCloudDataplexV1ZoneDiscoverySpec } from "./googleclouddataplexv1zonediscoveryspec";
import { GoogleCloudDataplexV1ZoneResourceSpec } from "./googleclouddataplexv1zoneresourcespec";
export declare enum GoogleCloudDataplexV1ZoneStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
export declare enum GoogleCloudDataplexV1ZoneTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Raw = "RAW",
    Curated = "CURATED"
}
/**
 * A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
**/
export declare class GoogleCloudDataplexV1ZoneInput extends SpeakeasyBase {
    assetStatus?: GoogleCloudDataplexV1AssetStatus;
    description?: string;
    discoverySpec?: GoogleCloudDataplexV1ZoneDiscoverySpec;
    displayName?: string;
    labels?: Map<string, string>;
    resourceSpec?: GoogleCloudDataplexV1ZoneResourceSpec;
    type?: GoogleCloudDataplexV1ZoneTypeEnum;
}
/**
 * A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.
**/
export declare class GoogleCloudDataplexV1Zone extends SpeakeasyBase {
    assetStatus?: GoogleCloudDataplexV1AssetStatus;
    createTime?: string;
    description?: string;
    discoverySpec?: GoogleCloudDataplexV1ZoneDiscoverySpec;
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    resourceSpec?: GoogleCloudDataplexV1ZoneResourceSpec;
    state?: GoogleCloudDataplexV1ZoneStateEnum;
    type?: GoogleCloudDataplexV1ZoneTypeEnum;
    uid?: string;
    updateTime?: string;
}
