import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Css
/** 
 * Information about CSS domain.
**/
export class Css extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cssDomainId" })
  cssDomainId?: string;

  @SpeakeasyMetadata({ data: "json, name=cssGroupId" })
  cssGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=homepageUri" })
  homepageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=labelIds" })
  labelIds?: string[];
}
