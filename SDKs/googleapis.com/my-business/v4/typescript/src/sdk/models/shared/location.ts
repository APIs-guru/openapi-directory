import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// LocationInput
/** 
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export class LocationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adWordsLocationExtensions" })
  adWordsLocationExtensions?: AdWordsLocationExtensions;

  @SpeakeasyMetadata({ data: "json, name=additionalCategories", elemType: CategoryInput })
  additionalCategories?: CategoryInput[];

  @SpeakeasyMetadata({ data: "json, name=additionalPhones" })
  additionalPhones?: string[];

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostalAddress;

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=latlng" })
  latlng?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=locationKey" })
  locationKey?: LocationKey;

  @SpeakeasyMetadata({ data: "json, name=locationName" })
  locationName?: string;

  @SpeakeasyMetadata({ data: "json, name=locationState" })
  locationState?: LocationStateInput;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @SpeakeasyMetadata({ data: "json, name=moreHours", elemType: MoreHours })
  moreHours?: MoreHours[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=openInfo" })
  openInfo?: OpenInfo;

  @SpeakeasyMetadata({ data: "json, name=priceLists", elemType: PriceList })
  priceLists?: PriceList[];

  @SpeakeasyMetadata({ data: "json, name=primaryCategory" })
  primaryCategory?: CategoryInput;

  @SpeakeasyMetadata({ data: "json, name=primaryPhone" })
  primaryPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: Profile;

  @SpeakeasyMetadata({ data: "json, name=regularHours" })
  regularHours?: BusinessHours;

  @SpeakeasyMetadata({ data: "json, name=relationshipData" })
  relationshipData?: RelationshipData;

  @SpeakeasyMetadata({ data: "json, name=serviceArea" })
  serviceArea?: ServiceAreaBusiness;

  @SpeakeasyMetadata({ data: "json, name=specialHours" })
  specialHours?: SpecialHours;

  @SpeakeasyMetadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}


// Location
/** 
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adWordsLocationExtensions" })
  adWordsLocationExtensions?: AdWordsLocationExtensions;

  @SpeakeasyMetadata({ data: "json, name=additionalCategories", elemType: Category })
  additionalCategories?: Category[];

  @SpeakeasyMetadata({ data: "json, name=additionalPhones" })
  additionalPhones?: string[];

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostalAddress;

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=latlng" })
  latlng?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=locationKey" })
  locationKey?: LocationKey;

  @SpeakeasyMetadata({ data: "json, name=locationName" })
  locationName?: string;

  @SpeakeasyMetadata({ data: "json, name=locationState" })
  locationState?: LocationState;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @SpeakeasyMetadata({ data: "json, name=moreHours", elemType: MoreHours })
  moreHours?: MoreHours[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=openInfo" })
  openInfo?: OpenInfo;

  @SpeakeasyMetadata({ data: "json, name=priceLists", elemType: PriceList })
  priceLists?: PriceList[];

  @SpeakeasyMetadata({ data: "json, name=primaryCategory" })
  primaryCategory?: Category;

  @SpeakeasyMetadata({ data: "json, name=primaryPhone" })
  primaryPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: Profile;

  @SpeakeasyMetadata({ data: "json, name=regularHours" })
  regularHours?: BusinessHours;

  @SpeakeasyMetadata({ data: "json, name=relationshipData" })
  relationshipData?: RelationshipData;

  @SpeakeasyMetadata({ data: "json, name=serviceArea" })
  serviceArea?: ServiceAreaBusiness;

  @SpeakeasyMetadata({ data: "json, name=specialHours" })
  specialHours?: SpecialHours;

  @SpeakeasyMetadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
