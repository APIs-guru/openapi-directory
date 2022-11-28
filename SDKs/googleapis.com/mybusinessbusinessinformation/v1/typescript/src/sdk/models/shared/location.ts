import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// LocationInput
/** 
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export class LocationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adWordsLocationExtensions" })
  adWordsLocationExtensions?: AdWordsLocationExtensions;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: CategoriesInput;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=latlng" })
  latlng?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=moreHours", elemType: MoreHours })
  moreHours?: MoreHours[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=openInfo" })
  openInfo?: OpenInfoInput;

  @SpeakeasyMetadata({ data: "json, name=phoneNumbers" })
  phoneNumbers?: PhoneNumbers;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: Profile;

  @SpeakeasyMetadata({ data: "json, name=regularHours" })
  regularHours?: BusinessHours;

  @SpeakeasyMetadata({ data: "json, name=relationshipData" })
  relationshipData?: RelationshipData;

  @SpeakeasyMetadata({ data: "json, name=serviceArea" })
  serviceArea?: ServiceAreaBusiness;

  @SpeakeasyMetadata({ data: "json, name=serviceItems", elemType: ServiceItem })
  serviceItems?: ServiceItem[];

  @SpeakeasyMetadata({ data: "json, name=specialHours" })
  specialHours?: SpecialHours;

  @SpeakeasyMetadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=storefrontAddress" })
  storefrontAddress?: PostalAddress;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUri" })
  websiteUri?: string;
}


// Location
/** 
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adWordsLocationExtensions" })
  adWordsLocationExtensions?: AdWordsLocationExtensions;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: Categories;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=latlng" })
  latlng?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @SpeakeasyMetadata({ data: "json, name=moreHours", elemType: MoreHours })
  moreHours?: MoreHours[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=openInfo" })
  openInfo?: OpenInfo;

  @SpeakeasyMetadata({ data: "json, name=phoneNumbers" })
  phoneNumbers?: PhoneNumbers;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: Profile;

  @SpeakeasyMetadata({ data: "json, name=regularHours" })
  regularHours?: BusinessHours;

  @SpeakeasyMetadata({ data: "json, name=relationshipData" })
  relationshipData?: RelationshipData;

  @SpeakeasyMetadata({ data: "json, name=serviceArea" })
  serviceArea?: ServiceAreaBusiness;

  @SpeakeasyMetadata({ data: "json, name=serviceItems", elemType: ServiceItem })
  serviceItems?: ServiceItem[];

  @SpeakeasyMetadata({ data: "json, name=specialHours" })
  specialHours?: SpecialHours;

  @SpeakeasyMetadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=storefrontAddress" })
  storefrontAddress?: PostalAddress;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=websiteUri" })
  websiteUri?: string;
}
