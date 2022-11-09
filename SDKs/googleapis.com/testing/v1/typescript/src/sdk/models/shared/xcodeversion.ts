import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// XcodeVersion
/** 
 * An Xcode version that an iOS version is compatible with.
**/
export class XcodeVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}
