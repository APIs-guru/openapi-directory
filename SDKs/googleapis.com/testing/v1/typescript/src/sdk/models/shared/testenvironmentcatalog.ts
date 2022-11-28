import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidDeviceCatalog } from "./androiddevicecatalog";
import { DeviceIpBlockCatalog } from "./deviceipblockcatalog";
import { IosDeviceCatalog } from "./iosdevicecatalog";
import { NetworkConfigurationCatalog } from "./networkconfigurationcatalog";
import { ProvidedSoftwareCatalog } from "./providedsoftwarecatalog";



// TestEnvironmentCatalog
/** 
 * A description of a test environment.
**/
export class TestEnvironmentCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidDeviceCatalog" })
  androidDeviceCatalog?: AndroidDeviceCatalog;

  @SpeakeasyMetadata({ data: "json, name=deviceIpBlockCatalog" })
  deviceIpBlockCatalog?: DeviceIpBlockCatalog;

  @SpeakeasyMetadata({ data: "json, name=iosDeviceCatalog" })
  iosDeviceCatalog?: IosDeviceCatalog;

  @SpeakeasyMetadata({ data: "json, name=networkConfigurationCatalog" })
  networkConfigurationCatalog?: NetworkConfigurationCatalog;

  @SpeakeasyMetadata({ data: "json, name=softwareCatalog" })
  softwareCatalog?: ProvidedSoftwareCatalog;
}
