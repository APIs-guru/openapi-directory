import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAdwordsLink } from "./accountadwordslink";
import { AccountBusinessInformation } from "./accountbusinessinformation";
import { AccountGoogleMyBusinessLink } from "./accountgooglemybusinesslink";
import { AccountUser } from "./accountuser";
import { AccountYouTubeChannelLink } from "./accountyoutubechannellink";



// Account
/** 
 * Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adultContent" })
  adultContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=adwordsLinks", elemType: AccountAdwordsLink })
  adwordsLinks?: AccountAdwordsLink[];

  @SpeakeasyMetadata({ data: "json, name=businessInformation" })
  businessInformation?: AccountBusinessInformation;

  @SpeakeasyMetadata({ data: "json, name=googleMyBusinessLink" })
  googleMyBusinessLink?: AccountGoogleMyBusinessLink;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewsUrl" })
  reviewsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerId" })
  sellerId?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: AccountUser })
  users?: AccountUser[];

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=youtubeChannelLinks", elemType: AccountYouTubeChannelLink })
  youtubeChannelLinks?: AccountYouTubeChannelLink[];
}
