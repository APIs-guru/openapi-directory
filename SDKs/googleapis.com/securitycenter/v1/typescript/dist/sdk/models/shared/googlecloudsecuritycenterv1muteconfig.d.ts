import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
**/
export declare class GoogleCloudSecuritycenterV1MuteConfig extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    filter?: string;
    mostRecentEditor?: string;
    name?: string;
    updateTime?: string;
}
/**
 * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
**/
export declare class GoogleCloudSecuritycenterV1MuteConfigInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    filter?: string;
    name?: string;
}
