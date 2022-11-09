import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IosModel } from "./iosmodel";
import { IosRuntimeConfiguration } from "./iosruntimeconfiguration";
import { IosVersion } from "./iosversion";
import { XcodeVersion } from "./xcodeversion";


// IosDeviceCatalog
/** 
 * The currently supported iOS devices.
**/
export class IosDeviceCatalog extends SpeakeasyBase {
  @Metadata({ data: "json, name=models", elemType: shared.IosModel })
  models?: IosModel[];

  @Metadata({ data: "json, name=runtimeConfiguration" })
  runtimeConfiguration?: IosRuntimeConfiguration;

  @Metadata({ data: "json, name=versions", elemType: shared.IosVersion })
  versions?: IosVersion[];

  @Metadata({ data: "json, name=xcodeVersions", elemType: shared.XcodeVersion })
  xcodeVersions?: XcodeVersion[];
}
