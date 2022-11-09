import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigFile } from "./configfile";
import { ImportFile } from "./importfile";


export class Manifest extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: ConfigFile;

  @Metadata({ data: "json, name=expandedConfig" })
  expandedConfig?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=imports", elemType: shared.ImportFile })
  imports?: ImportFile[];

  @Metadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @Metadata({ data: "json, name=layout" })
  layout?: string;

  @Metadata({ data: "json, name=manifestSizeBytes" })
  manifestSizeBytes?: string;

  @Metadata({ data: "json, name=manifestSizeLimitBytes" })
  manifestSizeLimitBytes?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
