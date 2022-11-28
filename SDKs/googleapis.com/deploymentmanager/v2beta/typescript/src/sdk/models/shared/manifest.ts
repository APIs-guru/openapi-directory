import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigFile } from "./configfile";
import { ImportFile } from "./importfile";



export class Manifest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ConfigFile;

  @SpeakeasyMetadata({ data: "json, name=expandedConfig" })
  expandedConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imports", elemType: ImportFile })
  imports?: ImportFile[];

  @SpeakeasyMetadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: string;

  @SpeakeasyMetadata({ data: "json, name=manifestSizeBytes" })
  manifestSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=manifestSizeLimitBytes" })
  manifestSizeLimitBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
