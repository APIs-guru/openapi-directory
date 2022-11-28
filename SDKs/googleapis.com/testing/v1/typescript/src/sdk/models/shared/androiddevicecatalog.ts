import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidModel } from "./androidmodel";
import { AndroidRuntimeConfiguration } from "./androidruntimeconfiguration";
import { AndroidVersion } from "./androidversion";



// AndroidDeviceCatalog
/** 
 * The currently supported Android devices.
**/
export class AndroidDeviceCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=models", elemType: AndroidModel })
  models?: AndroidModel[];

  @SpeakeasyMetadata({ data: "json, name=runtimeConfiguration" })
  runtimeConfiguration?: AndroidRuntimeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: AndroidVersion })
  versions?: AndroidVersion[];
}
