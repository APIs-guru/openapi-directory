import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScanConfig
/** 
 * Indicates various scans and whether they are turned on or off.
**/
export class ScanConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
