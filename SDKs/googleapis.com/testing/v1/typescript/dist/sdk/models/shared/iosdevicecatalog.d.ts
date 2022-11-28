import { SpeakeasyBase } from "../../../internal/utils";
import { IosModel } from "./iosmodel";
import { IosRuntimeConfiguration } from "./iosruntimeconfiguration";
import { IosVersion } from "./iosversion";
import { XcodeVersion } from "./xcodeversion";
/**
 * The currently supported iOS devices.
**/
export declare class IosDeviceCatalog extends SpeakeasyBase {
    models?: IosModel[];
    runtimeConfiguration?: IosRuntimeConfiguration;
    versions?: IosVersion[];
    xcodeVersions?: XcodeVersion[];
}
