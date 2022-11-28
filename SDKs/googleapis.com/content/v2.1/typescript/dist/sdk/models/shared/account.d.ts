import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAdsLink } from "./accountadslink";
import { AccountAutomaticImprovementsInput } from "./accountautomaticimprovements";
import { AccountBusinessInformation } from "./accountbusinessinformation";
import { AccountGoogleMyBusinessLink } from "./accountgooglemybusinesslink";
import { AccountUser } from "./accountuser";
import { AccountYouTubeChannelLink } from "./accountyoutubechannellink";
import { AccountAutomaticImprovements } from "./accountautomaticimprovements";
/**
 * Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
**/
export declare class AccountInput extends SpeakeasyBase {
    adsLinks?: AccountAdsLink[];
    adultContent?: boolean;
    automaticImprovements?: AccountAutomaticImprovementsInput;
    automaticLabelIds?: string[];
    businessInformation?: AccountBusinessInformation;
    cssId?: string;
    googleMyBusinessLink?: AccountGoogleMyBusinessLink;
    id?: string;
    kind?: string;
    labelIds?: string[];
    name?: string;
    sellerId?: string;
    users?: AccountUser[];
    websiteUrl?: string;
    youtubeChannelLinks?: AccountYouTubeChannelLink[];
}
/**
 * Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
**/
export declare class Account extends SpeakeasyBase {
    accountManagement?: string;
    adsLinks?: AccountAdsLink[];
    adultContent?: boolean;
    automaticImprovements?: AccountAutomaticImprovements;
    automaticLabelIds?: string[];
    businessInformation?: AccountBusinessInformation;
    cssId?: string;
    googleMyBusinessLink?: AccountGoogleMyBusinessLink;
    id?: string;
    kind?: string;
    labelIds?: string[];
    name?: string;
    sellerId?: string;
    users?: AccountUser[];
    websiteUrl?: string;
    youtubeChannelLinks?: AccountYouTubeChannelLink[];
}
