import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// XcodeVersion
/** 
 * An Xcode version that an iOS version is compatible with.
**/
export class XcodeVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
