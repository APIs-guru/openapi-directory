import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdWordsLocationExtensions } from "./adwordslocationextensions";
import { Categories } from "./categories";
import { LatLng } from "./latlng";
import { Metadata } from "./metadata";
import { MoreHours } from "./morehours";
import { OpenInfo } from "./openinfo";
import { PhoneNumbers } from "./phonenumbers";
import { Profile } from "./profile";
import { BusinessHours } from "./businesshours";
import { RelationshipData } from "./relationshipdata";
import { ServiceAreaBusiness } from "./serviceareabusiness";
import { ServiceItem } from "./serviceitem";
import { SpecialHours } from "./specialhours";
import { PostalAddress } from "./postaladdress";


// Location
/** 
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=adWordsLocationExtensions" })
  adWordsLocationExtensions?: AdWordsLocationExtensions;

  @Metadata({ data: "json, name=categories" })
  categories?: Categories;

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=latlng" })
  latlng?: LatLng;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @Metadata({ data: "json, name=moreHours", elemType: shared.MoreHours })
  moreHours?: MoreHours[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=openInfo" })
  openInfo?: OpenInfo;

  @Metadata({ data: "json, name=phoneNumbers" })
  phoneNumbers?: PhoneNumbers;

  @Metadata({ data: "json, name=profile" })
  profile?: Profile;

  @Metadata({ data: "json, name=regularHours" })
  regularHours?: BusinessHours;

  @Metadata({ data: "json, name=relationshipData" })
  relationshipData?: RelationshipData;

  @Metadata({ data: "json, name=serviceArea" })
  serviceArea?: ServiceAreaBusiness;

  @Metadata({ data: "json, name=serviceItems", elemType: shared.ServiceItem })
  serviceItems?: ServiceItem[];

  @Metadata({ data: "json, name=specialHours" })
  specialHours?: SpecialHours;

  @Metadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @Metadata({ data: "json, name=storefrontAddress" })
  storefrontAddress?: PostalAddress;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=websiteUri" })
  websiteUri?: string;
}
