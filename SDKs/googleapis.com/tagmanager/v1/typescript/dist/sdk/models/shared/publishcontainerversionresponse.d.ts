import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
/**
 * Publish container version response.
**/
export declare class PublishContainerVersionResponse extends SpeakeasyBase {
    compilerError?: boolean;
    containerVersion?: ContainerVersion;
}
