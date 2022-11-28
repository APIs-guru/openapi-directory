import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigFile } from "./configfile";
import { ImportFile } from "./importfile";



export class TargetConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ConfigFile;

  @SpeakeasyMetadata({ data: "json, name=imports", elemType: ImportFile })
  imports?: ImportFile[];
}
