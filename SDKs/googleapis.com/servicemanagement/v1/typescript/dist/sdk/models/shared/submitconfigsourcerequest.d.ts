import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigSource } from "./configsource";
/**
 * Request message for SubmitConfigSource method.
**/
export declare class SubmitConfigSourceRequest extends SpeakeasyBase {
    configSource?: ConfigSource;
    validateOnly?: boolean;
}
