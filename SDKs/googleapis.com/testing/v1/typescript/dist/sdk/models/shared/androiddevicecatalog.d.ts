import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidModel } from "./androidmodel";
import { AndroidRuntimeConfiguration } from "./androidruntimeconfiguration";
import { AndroidVersion } from "./androidversion";
/**
 * The currently supported Android devices.
**/
export declare class AndroidDeviceCatalog extends SpeakeasyBase {
    models?: AndroidModel[];
    runtimeConfiguration?: AndroidRuntimeConfiguration;
    versions?: AndroidVersion[];
}
