import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
import { IosDeviceFile } from "./iosdevicefile";
/**
 * A description of how to set up an iOS device prior to running the test.
**/
export declare class IosTestSetup extends SpeakeasyBase {
    additionalIpas?: FileReference[];
    networkProfile?: string;
    pullDirectories?: IosDeviceFile[];
    pushFiles?: IosDeviceFile[];
}
