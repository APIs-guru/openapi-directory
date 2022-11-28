import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
import { Transportation } from "./transportation";
import { Wellness } from "./wellness";



// Lodging
/** 
 * Lodging of a location that provides accomodations.
**/
export class Lodging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessibility" })
  accessibility?: Accessibility;

  @SpeakeasyMetadata({ data: "json, name=activities" })
  activities?: Activities;

  @SpeakeasyMetadata({ data: "json, name=allUnits" })
  allUnits?: GuestUnitFeatures;

  @SpeakeasyMetadata({ data: "json, name=business" })
  business?: Business;

  @SpeakeasyMetadata({ data: "json, name=commonLivingArea" })
  commonLivingArea?: LivingArea;

  @SpeakeasyMetadata({ data: "json, name=connectivity" })
  connectivity?: Connectivity;

  @SpeakeasyMetadata({ data: "json, name=families" })
  families?: Families;

  @SpeakeasyMetadata({ data: "json, name=foodAndDrink" })
  foodAndDrink?: FoodAndDrink;

  @SpeakeasyMetadata({ data: "json, name=guestUnits", elemType: GuestUnitType })
  guestUnits?: GuestUnitType[];

  @SpeakeasyMetadata({ data: "json, name=healthAndSafety" })
  healthAndSafety?: HealthAndSafety;

  @SpeakeasyMetadata({ data: "json, name=housekeeping" })
  housekeeping?: Housekeeping;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: LodgingMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parking" })
  parking?: Parking;

  @SpeakeasyMetadata({ data: "json, name=pets" })
  pets?: Pets;

  @SpeakeasyMetadata({ data: "json, name=policies" })
  policies?: Policies;

  @SpeakeasyMetadata({ data: "json, name=pools" })
  pools?: Pools;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: Property;

  @SpeakeasyMetadata({ data: "json, name=services" })
  services?: Services;

  @SpeakeasyMetadata({ data: "json, name=someUnits" })
  someUnits?: GuestUnitFeatures;

  @SpeakeasyMetadata({ data: "json, name=transportation" })
  transportation?: Transportation;

  @SpeakeasyMetadata({ data: "json, name=wellness" })
  wellness?: Wellness;
}
