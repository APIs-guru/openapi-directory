import { SpeakeasyBase } from "../../../internal/utils";
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
import { SustainabilityInput } from "./sustainability";
import { Transportation } from "./transportation";
import { Wellness } from "./wellness";
import { Sustainability } from "./sustainability";
/**
 * Lodging of a location that provides accomodations.
**/
export declare class LodgingInput extends SpeakeasyBase {
    accessibility?: Accessibility;
    activities?: Activities;
    allUnits?: GuestUnitFeatures;
    business?: Business;
    commonLivingArea?: LivingArea;
    connectivity?: Connectivity;
    families?: Families;
    foodAndDrink?: FoodAndDrink;
    guestUnits?: GuestUnitType[];
    healthAndSafety?: HealthAndSafety;
    housekeeping?: Housekeeping;
    metadata?: LodgingMetadata;
    name?: string;
    parking?: Parking;
    pets?: Pets;
    policies?: Policies;
    pools?: Pools;
    property?: Property;
    services?: Services;
    someUnits?: GuestUnitFeatures;
    sustainability?: SustainabilityInput;
    transportation?: Transportation;
    wellness?: Wellness;
}
/**
 * Lodging of a location that provides accomodations.
**/
export declare class Lodging extends SpeakeasyBase {
    accessibility?: Accessibility;
    activities?: Activities;
    allUnits?: GuestUnitFeatures;
    business?: Business;
    commonLivingArea?: LivingArea;
    connectivity?: Connectivity;
    families?: Families;
    foodAndDrink?: FoodAndDrink;
    guestUnits?: GuestUnitType[];
    healthAndSafety?: HealthAndSafety;
    housekeeping?: Housekeeping;
    metadata?: LodgingMetadata;
    name?: string;
    parking?: Parking;
    pets?: Pets;
    policies?: Policies;
    pools?: Pools;
    property?: Property;
    services?: Services;
    someUnits?: GuestUnitFeatures;
    sustainability?: Sustainability;
    transportation?: Transportation;
    wellness?: Wellness;
}
