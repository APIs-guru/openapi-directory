import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidDeviceCatalog } from "./androiddevicecatalog";
import { DeviceIpBlockCatalog } from "./deviceipblockcatalog";
import { IosDeviceCatalog } from "./iosdevicecatalog";
import { NetworkConfigurationCatalog } from "./networkconfigurationcatalog";
import { ProvidedSoftwareCatalog } from "./providedsoftwarecatalog";
/**
 * A description of a test environment.
**/
export declare class TestEnvironmentCatalog extends SpeakeasyBase {
    androidDeviceCatalog?: AndroidDeviceCatalog;
    deviceIpBlockCatalog?: DeviceIpBlockCatalog;
    iosDeviceCatalog?: IosDeviceCatalog;
    networkConfigurationCatalog?: NetworkConfigurationCatalog;
    softwareCatalog?: ProvidedSoftwareCatalog;
}
