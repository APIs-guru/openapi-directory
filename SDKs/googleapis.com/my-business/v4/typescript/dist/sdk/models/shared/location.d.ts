import { SpeakeasyBase } from "../../../internal/utils";
import { AdWordsLocationExtensions } from "./adwordslocationextensions";
import { CategoryInput } from "./category";
import { PostalAddress } from "./postaladdress";
import { Attribute } from "./attribute";
import { LatLng } from "./latlng";
import { LocationKey } from "./locationkey";
import { LocationStateInput } from "./locationstate";
import { Metadata } from "./metadata";
import { MoreHours } from "./morehours";
import { OpenInfo } from "./openinfo";
import { PriceList } from "./pricelist";
import { Profile } from "./profile";
import { BusinessHours } from "./businesshours";
import { RelationshipData } from "./relationshipdata";
import { ServiceAreaBusiness } from "./serviceareabusiness";
import { SpecialHours } from "./specialhours";
import { Category } from "./category";
import { LocationState } from "./locationstate";
/**
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export declare class LocationInput extends SpeakeasyBase {
    adWordsLocationExtensions?: AdWordsLocationExtensions;
    additionalCategories?: CategoryInput[];
    additionalPhones?: string[];
    address?: PostalAddress;
    attributes?: Attribute[];
    labels?: string[];
    languageCode?: string;
    latlng?: LatLng;
    locationKey?: LocationKey;
    locationName?: string;
    locationState?: LocationStateInput;
    metadata?: Metadata;
    moreHours?: MoreHours[];
    name?: string;
    openInfo?: OpenInfo;
    priceLists?: PriceList[];
    primaryCategory?: CategoryInput;
    primaryPhone?: string;
    profile?: Profile;
    regularHours?: BusinessHours;
    relationshipData?: RelationshipData;
    serviceArea?: ServiceAreaBusiness;
    specialHours?: SpecialHours;
    storeCode?: string;
    websiteUrl?: string;
}
/**
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export declare class Location extends SpeakeasyBase {
    adWordsLocationExtensions?: AdWordsLocationExtensions;
    additionalCategories?: Category[];
    additionalPhones?: string[];
    address?: PostalAddress;
    attributes?: Attribute[];
    labels?: string[];
    languageCode?: string;
    latlng?: LatLng;
    locationKey?: LocationKey;
    locationName?: string;
    locationState?: LocationState;
    metadata?: Metadata;
    moreHours?: MoreHours[];
    name?: string;
    openInfo?: OpenInfo;
    priceLists?: PriceList[];
    primaryCategory?: Category;
    primaryPhone?: string;
    profile?: Profile;
    regularHours?: BusinessHours;
    relationshipData?: RelationshipData;
    serviceArea?: ServiceAreaBusiness;
    specialHours?: SpecialHours;
    storeCode?: string;
    websiteUrl?: string;
}
