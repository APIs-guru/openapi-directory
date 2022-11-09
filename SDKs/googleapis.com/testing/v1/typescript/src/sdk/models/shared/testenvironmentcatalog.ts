import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=androidDeviceCatalog" })
  androidDeviceCatalog?: AndroidDeviceCatalog;

  @Metadata({ data: "json, name=deviceIpBlockCatalog" })
  deviceIpBlockCatalog?: DeviceIpBlockCatalog;

  @Metadata({ data: "json, name=iosDeviceCatalog" })
  iosDeviceCatalog?: IosDeviceCatalog;

  @Metadata({ data: "json, name=networkConfigurationCatalog" })
  networkConfigurationCatalog?: NetworkConfigurationCatalog;

  @Metadata({ data: "json, name=softwareCatalog" })
  softwareCatalog?: ProvidedSoftwareCatalog;
}
