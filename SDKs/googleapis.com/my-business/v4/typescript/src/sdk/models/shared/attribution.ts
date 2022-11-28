import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Attribution
/** 
 * Attribution information for customer media items, such as the contributor's name and profile picture.
**/
export class Attribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profileName" })
  profileName?: string;

  @SpeakeasyMetadata({ data: "json, name=profilePhotoUrl" })
  profilePhotoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=profileUrl" })
  profileUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=takedownUrl" })
  takedownUrl?: string;
}
