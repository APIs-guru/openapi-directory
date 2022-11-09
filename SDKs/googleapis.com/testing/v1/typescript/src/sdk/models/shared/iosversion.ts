import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IosVersion
/** 
 * An iOS version.
**/
export class IosVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=majorVersion" })
  majorVersion?: number;

  @Metadata({ data: "json, name=minorVersion" })
  minorVersion?: number;

  @Metadata({ data: "json, name=supportedXcodeVersionIds" })
  supportedXcodeVersionIds?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
