import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2SecretKeySelector } from "./googlecloudrunv2secretkeyselector";
/**
 * EnvVarSource represents a source for the value of an EnvVar.
**/
export declare class GoogleCloudRunV2EnvVarSource extends SpeakeasyBase {
    secretKeyRef?: GoogleCloudRunV2SecretKeySelector;
}
