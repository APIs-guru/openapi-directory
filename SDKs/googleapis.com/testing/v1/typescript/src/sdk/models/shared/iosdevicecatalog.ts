import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IosModel } from "./iosmodel";
import { IosRuntimeConfiguration } from "./iosruntimeconfiguration";
import { IosVersion } from "./iosversion";
import { XcodeVersion } from "./xcodeversion";



// IosDeviceCatalog
/** 
 * The currently supported iOS devices.
**/
export class IosDeviceCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=models", elemType: IosModel })
  models?: IosModel[];

  @SpeakeasyMetadata({ data: "json, name=runtimeConfiguration" })
  runtimeConfiguration?: IosRuntimeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: IosVersion })
  versions?: IosVersion[];

  @SpeakeasyMetadata({ data: "json, name=xcodeVersions", elemType: XcodeVersion })
  xcodeVersions?: XcodeVersion[];
}
