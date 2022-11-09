import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutdatedLibrary
/** 
 * Information reported for an outdated library.
**/
export class OutdatedLibrary extends SpeakeasyBase {
  @Metadata({ data: "json, name=learnMoreUrls" })
  learnMoreUrls?: string[];

  @Metadata({ data: "json, name=libraryName" })
  libraryName?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
