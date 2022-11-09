import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AndroidModel } from "./androidmodel";
import { AndroidRuntimeConfiguration } from "./androidruntimeconfiguration";
import { AndroidVersion } from "./androidversion";


// AndroidDeviceCatalog
/** 
 * The currently supported Android devices.
**/
export class AndroidDeviceCatalog extends SpeakeasyBase {
  @Metadata({ data: "json, name=models", elemType: shared.AndroidModel })
  models?: AndroidModel[];

  @Metadata({ data: "json, name=runtimeConfiguration" })
  runtimeConfiguration?: AndroidRuntimeConfiguration;

  @Metadata({ data: "json, name=versions", elemType: shared.AndroidVersion })
  versions?: AndroidVersion[];
}
