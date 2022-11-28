import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAdsLink } from "./accountadslink";
import { AccountAutomaticImprovementsInput } from "./accountautomaticimprovements";
import { AccountBusinessInformation } from "./accountbusinessinformation";
import { AccountGoogleMyBusinessLink } from "./accountgooglemybusinesslink";
import { AccountUser } from "./accountuser";
import { AccountYouTubeChannelLink } from "./accountyoutubechannellink";
import { AccountAutomaticImprovements } from "./accountautomaticimprovements";



// AccountInput
/** 
 * Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
**/
export class AccountInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adsLinks", elemType: AccountAdsLink })
  adsLinks?: AccountAdsLink[];

  @SpeakeasyMetadata({ data: "json, name=adultContent" })
  adultContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=automaticImprovements" })
  automaticImprovements?: AccountAutomaticImprovementsInput;

  @SpeakeasyMetadata({ data: "json, name=automaticLabelIds" })
  automaticLabelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=businessInformation" })
  businessInformation?: AccountBusinessInformation;

  @SpeakeasyMetadata({ data: "json, name=cssId" })
  cssId?: string;

  @SpeakeasyMetadata({ data: "json, name=googleMyBusinessLink" })
  googleMyBusinessLink?: AccountGoogleMyBusinessLink;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labelIds" })
  labelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerId" })
  sellerId?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: AccountUser })
  users?: AccountUser[];

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=youtubeChannelLinks", elemType: AccountYouTubeChannelLink })
  youtubeChannelLinks?: AccountYouTubeChannelLink[];
}


// Account
/** 
 * Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountManagement" })
  accountManagement?: string;

  @SpeakeasyMetadata({ data: "json, name=adsLinks", elemType: AccountAdsLink })
  adsLinks?: AccountAdsLink[];

  @SpeakeasyMetadata({ data: "json, name=adultContent" })
  adultContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=automaticImprovements" })
  automaticImprovements?: AccountAutomaticImprovements;

  @SpeakeasyMetadata({ data: "json, name=automaticLabelIds" })
  automaticLabelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=businessInformation" })
  businessInformation?: AccountBusinessInformation;

  @SpeakeasyMetadata({ data: "json, name=cssId" })
  cssId?: string;

  @SpeakeasyMetadata({ data: "json, name=googleMyBusinessLink" })
  googleMyBusinessLink?: AccountGoogleMyBusinessLink;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labelIds" })
  labelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerId" })
  sellerId?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: AccountUser })
  users?: AccountUser[];

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=youtubeChannelLinks", elemType: AccountYouTubeChannelLink })
  youtubeChannelLinks?: AccountYouTubeChannelLink[];
}
