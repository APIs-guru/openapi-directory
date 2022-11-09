import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Css
/** 
 * Information about CSS domain.
**/
export class Css extends SpeakeasyBase {
  @Metadata({ data: "json, name=cssDomainId" })
  cssDomainId?: string;

  @Metadata({ data: "json, name=cssGroupId" })
  cssGroupId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=homepageUri" })
  homepageUri?: string;

  @Metadata({ data: "json, name=labelIds" })
  labelIds?: string[];
}
