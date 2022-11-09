import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountAdsLink } from "./accountadslink";
import { AccountAutomaticImprovements } from "./accountautomaticimprovements";
import { AccountBusinessInformation } from "./accountbusinessinformation";
import { AccountGoogleMyBusinessLink } from "./accountgooglemybusinesslink";
import { AccountUser } from "./accountuser";
import { AccountYouTubeChannelLink } from "./accountyoutubechannellink";


// Account
/** 
 * Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountManagement" })
  accountManagement?: string;

  @Metadata({ data: "json, name=adsLinks", elemType: shared.AccountAdsLink })
  adsLinks?: AccountAdsLink[];

  @Metadata({ data: "json, name=adultContent" })
  adultContent?: boolean;

  @Metadata({ data: "json, name=automaticImprovements" })
  automaticImprovements?: AccountAutomaticImprovements;

  @Metadata({ data: "json, name=automaticLabelIds" })
  automaticLabelIds?: string[];

  @Metadata({ data: "json, name=businessInformation" })
  businessInformation?: AccountBusinessInformation;

  @Metadata({ data: "json, name=cssId" })
  cssId?: string;

  @Metadata({ data: "json, name=googleMyBusinessLink" })
  googleMyBusinessLink?: AccountGoogleMyBusinessLink;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labelIds" })
  labelIds?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sellerId" })
  sellerId?: string;

  @Metadata({ data: "json, name=users", elemType: shared.AccountUser })
  users?: AccountUser[];

  @Metadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;

  @Metadata({ data: "json, name=youtubeChannelLinks", elemType: shared.AccountYouTubeChannelLink })
  youtubeChannelLinks?: AccountYouTubeChannelLink[];
}
