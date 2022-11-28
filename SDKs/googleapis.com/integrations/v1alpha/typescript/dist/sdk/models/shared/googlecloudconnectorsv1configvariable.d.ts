import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
/**
 * ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.
**/
export declare class GoogleCloudConnectorsV1ConfigVariable extends SpeakeasyBase {
    boolValue?: boolean;
    intValue?: string;
    key?: string;
    secretValue?: GoogleCloudConnectorsV1Secret;
    stringValue?: string;
}
