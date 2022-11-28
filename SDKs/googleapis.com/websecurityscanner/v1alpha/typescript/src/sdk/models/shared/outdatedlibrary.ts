import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutdatedLibrary
/** 
 * Information reported for an outdated library.
**/
export class OutdatedLibrary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=learnMoreUrls" })
  learnMoreUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=libraryName" })
  libraryName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
