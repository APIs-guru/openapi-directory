import { SpeakeasyBase } from "../../../internal/utils";
import { AdWordsLocationExtensions } from "./adwordslocationextensions";
import { CategoriesInput } from "./categories";
import { LatLng } from "./latlng";
import { MoreHours } from "./morehours";
import { OpenInfoInput } from "./openinfo";
import { PhoneNumbers } from "./phonenumbers";
import { Profile } from "./profile";
import { BusinessHours } from "./businesshours";
import { RelationshipData } from "./relationshipdata";
import { ServiceAreaBusiness } from "./serviceareabusiness";
import { ServiceItem } from "./serviceitem";
import { SpecialHours } from "./specialhours";
import { PostalAddress } from "./postaladdress";
import { Categories } from "./categories";
import { Metadata } from "./metadata";
import { OpenInfo } from "./openinfo";
/**
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export declare class LocationInput extends SpeakeasyBase {
    adWordsLocationExtensions?: AdWordsLocationExtensions;
    categories?: CategoriesInput;
    labels?: string[];
    languageCode?: string;
    latlng?: LatLng;
    moreHours?: MoreHours[];
    name?: string;
    openInfo?: OpenInfoInput;
    phoneNumbers?: PhoneNumbers;
    profile?: Profile;
    regularHours?: BusinessHours;
    relationshipData?: RelationshipData;
    serviceArea?: ServiceAreaBusiness;
    serviceItems?: ServiceItem[];
    specialHours?: SpecialHours;
    storeCode?: string;
    storefrontAddress?: PostalAddress;
    title?: string;
    websiteUri?: string;
}
/**
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export declare class Location extends SpeakeasyBase {
    adWordsLocationExtensions?: AdWordsLocationExtensions;
    categories?: Categories;
    labels?: string[];
    languageCode?: string;
    latlng?: LatLng;
    metadata?: Metadata;
    moreHours?: MoreHours[];
    name?: string;
    openInfo?: OpenInfo;
    phoneNumbers?: PhoneNumbers;
    profile?: Profile;
    regularHours?: BusinessHours;
    relationshipData?: RelationshipData;
    serviceArea?: ServiceAreaBusiness;
    serviceItems?: ServiceItem[];
    specialHours?: SpecialHours;
    storeCode?: string;
    storefrontAddress?: PostalAddress;
    title?: string;
    websiteUri?: string;
}
