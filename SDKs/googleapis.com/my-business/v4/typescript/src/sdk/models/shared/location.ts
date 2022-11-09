import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdWordsLocationExtensions } from "./adwordslocationextensions";
import { Category } from "./category";
import { PostalAddress } from "./postaladdress";
import { Attribute } from "./attribute";
import { LatLng } from "./latlng";
import { LocationKey } from "./locationkey";
import { LocationState } from "./locationstate";
import { Metadata } from "./metadata";
import { MoreHours } from "./morehours";
import { OpenInfo } from "./openinfo";
import { PriceList } from "./pricelist";
import { Category } from "./category";
import { Profile } from "./profile";
import { BusinessHours } from "./businesshours";
import { RelationshipData } from "./relationshipdata";
import { ServiceAreaBusiness } from "./serviceareabusiness";
import { SpecialHours } from "./specialhours";


// Location
/** 
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=adWordsLocationExtensions" })
  adWordsLocationExtensions?: AdWordsLocationExtensions;

  @Metadata({ data: "json, name=additionalCategories", elemType: shared.Category })
  additionalCategories?: Category[];

  @Metadata({ data: "json, name=additionalPhones" })
  additionalPhones?: string[];

  @Metadata({ data: "json, name=address" })
  address?: PostalAddress;

  @Metadata({ data: "json, name=attributes", elemType: shared.Attribute })
  attributes?: Attribute[];

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=latlng" })
  latlng?: LatLng;

  @Metadata({ data: "json, name=locationKey" })
  locationKey?: LocationKey;

  @Metadata({ data: "json, name=locationName" })
  locationName?: string;

  @Metadata({ data: "json, name=locationState" })
  locationState?: LocationState;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @Metadata({ data: "json, name=moreHours", elemType: shared.MoreHours })
  moreHours?: MoreHours[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=openInfo" })
  openInfo?: OpenInfo;

  @Metadata({ data: "json, name=priceLists", elemType: shared.PriceList })
  priceLists?: PriceList[];

  @Metadata({ data: "json, name=primaryCategory" })
  primaryCategory?: Category;

  @Metadata({ data: "json, name=primaryPhone" })
  primaryPhone?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: Profile;

  @Metadata({ data: "json, name=regularHours" })
  regularHours?: BusinessHours;

  @Metadata({ data: "json, name=relationshipData" })
  relationshipData?: RelationshipData;

  @Metadata({ data: "json, name=serviceArea" })
  serviceArea?: ServiceAreaBusiness;

  @Metadata({ data: "json, name=specialHours" })
  specialHours?: SpecialHours;

  @Metadata({ data: "json, name=storeCode" })
  storeCode?: string;

  @Metadata({ data: "json, name=websiteUrl" })
  websiteUrl?: string;
}
