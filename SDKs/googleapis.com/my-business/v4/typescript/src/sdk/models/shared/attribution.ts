import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Attribution
/** 
 * Attribution information for customer media items, such as the contributor's name and profile picture.
**/
export class Attribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=profileName" })
  profileName?: string;

  @Metadata({ data: "json, name=profilePhotoUrl" })
  profilePhotoUrl?: string;

  @Metadata({ data: "json, name=profileUrl" })
  profileUrl?: string;

  @Metadata({ data: "json, name=takedownUrl" })
  takedownUrl?: string;
}
