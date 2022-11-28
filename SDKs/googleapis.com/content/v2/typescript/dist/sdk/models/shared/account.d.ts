import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAdwordsLink } from "./accountadwordslink";
import { AccountBusinessInformation } from "./accountbusinessinformation";
import { AccountGoogleMyBusinessLink } from "./accountgooglemybusinesslink";
import { AccountUser } from "./accountuser";
import { AccountYouTubeChannelLink } from "./accountyoutubechannellink";
/**
 * Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role.
**/
export declare class Account extends SpeakeasyBase {
    adultContent?: boolean;
    adwordsLinks?: AccountAdwordsLink[];
    businessInformation?: AccountBusinessInformation;
    googleMyBusinessLink?: AccountGoogleMyBusinessLink;
    id?: string;
    kind?: string;
    name?: string;
    reviewsUrl?: string;
    sellerId?: string;
    users?: AccountUser[];
    websiteUrl?: string;
    youtubeChannelLinks?: AccountYouTubeChannelLink[];
}
