import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IosVersion
/** 
 * An iOS version.
**/
export class IosVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=minorVersion" })
  minorVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=supportedXcodeVersionIds" })
  supportedXcodeVersionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
