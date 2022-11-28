import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Value } from "./googlecloudchannelv1value";
/**
 * Definition for extended entitlement parameters.
**/
export declare class GoogleCloudChannelV1Parameter extends SpeakeasyBase {
    editable?: boolean;
    name?: string;
    value?: GoogleCloudChannelV1Value;
}
/**
 * Definition for extended entitlement parameters.
**/
export declare class GoogleCloudChannelV1ParameterInput extends SpeakeasyBase {
    name?: string;
    value?: GoogleCloudChannelV1Value;
}
