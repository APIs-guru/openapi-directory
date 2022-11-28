import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.
**/
export declare class IosTestLoop extends SpeakeasyBase {
    appBundleId?: string;
    appIpa?: FileReference;
    scenarios?: number[];
}
