import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Accessibility } from "./accessibility";
import { Activities } from "./activities";
import { GuestUnitFeatures } from "./guestunitfeatures";
import { Business } from "./business";
import { LivingArea } from "./livingarea";
import { Connectivity } from "./connectivity";
import { Families } from "./families";
import { FoodAndDrink } from "./foodanddrink";
import { GuestUnitType } from "./guestunittype";
import { HealthAndSafety } from "./healthandsafety";
import { Housekeeping } from "./housekeeping";
import { LodgingMetadata } from "./lodgingmetadata";
import { Parking } from "./parking";
import { Pets } from "./pets";
import { Policies } from "./policies";
import { Pools } from "./pools";
import { Property } from "./property";
import { Services } from "./services";
import { GuestUnitFeatures } from "./guestunitfeatures";
import { Sustainability } from "./sustainability";
import { Transportation } from "./transportation";
import { Wellness } from "./wellness";


// Lodging
/** 
 * Lodging of a location that provides accomodations.
**/
export class Lodging extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessibility" })
  accessibility?: Accessibility;

  @Metadata({ data: "json, name=activities" })
  activities?: Activities;

  @Metadata({ data: "json, name=allUnits" })
  allUnits?: GuestUnitFeatures;

  @Metadata({ data: "json, name=business" })
  business?: Business;

  @Metadata({ data: "json, name=commonLivingArea" })
  commonLivingArea?: LivingArea;

  @Metadata({ data: "json, name=connectivity" })
  connectivity?: Connectivity;

  @Metadata({ data: "json, name=families" })
  families?: Families;

  @Metadata({ data: "json, name=foodAndDrink" })
  foodAndDrink?: FoodAndDrink;

  @Metadata({ data: "json, name=guestUnits", elemType: shared.GuestUnitType })
  guestUnits?: GuestUnitType[];

  @Metadata({ data: "json, name=healthAndSafety" })
  healthAndSafety?: HealthAndSafety;

  @Metadata({ data: "json, name=housekeeping" })
  housekeeping?: Housekeeping;

  @Metadata({ data: "json, name=metadata" })
  metadata?: LodgingMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parking" })
  parking?: Parking;

  @Metadata({ data: "json, name=pets" })
  pets?: Pets;

  @Metadata({ data: "json, name=policies" })
  policies?: Policies;

  @Metadata({ data: "json, name=pools" })
  pools?: Pools;

  @Metadata({ data: "json, name=property" })
  property?: Property;

  @Metadata({ data: "json, name=services" })
  services?: Services;

  @Metadata({ data: "json, name=someUnits" })
  someUnits?: GuestUnitFeatures;

  @Metadata({ data: "json, name=sustainability" })
  sustainability?: Sustainability;

  @Metadata({ data: "json, name=transportation" })
  transportation?: Transportation;

  @Metadata({ data: "json, name=wellness" })
  wellness?: Wellness;
}
