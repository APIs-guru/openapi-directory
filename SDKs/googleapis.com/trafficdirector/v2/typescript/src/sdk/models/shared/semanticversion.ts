import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SemanticVersion
/** 
 * Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored.
**/
export class SemanticVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=majorNumber" })
  majorNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=minorNumber" })
  minorNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=patch" })
  patch?: number;
}
