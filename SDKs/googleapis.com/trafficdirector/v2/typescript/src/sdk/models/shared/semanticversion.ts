import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SemanticVersion
/** 
 * Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored.
**/
export class SemanticVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=majorNumber" })
  majorNumber?: number;

  @Metadata({ data: "json, name=minorNumber" })
  minorNumber?: number;

  @Metadata({ data: "json, name=patch" })
  patch?: number;
}
