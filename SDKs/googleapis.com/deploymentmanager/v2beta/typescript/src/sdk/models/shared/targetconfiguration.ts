import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigFile } from "./configfile";
import { ImportFile } from "./importfile";


export class TargetConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: ConfigFile;

  @Metadata({ data: "json, name=imports", elemType: shared.ImportFile })
  imports?: ImportFile[];
}
