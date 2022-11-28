import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LocationFeaturesEnum {
    LocationFeatureUnspecified = "LOCATION_FEATURE_UNSPECIFIED",
    Firestore = "FIRESTORE",
    DefaultStorage = "DEFAULT_STORAGE",
    Functions = "FUNCTIONS"
}
export declare enum LocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED",
    Regional = "REGIONAL",
    MultiRegional = "MULTI_REGIONAL"
}
/**
 * A GCP resource location that can be selected for a FirebaseProject.
**/
export declare class Location extends SpeakeasyBase {
    features?: LocationFeaturesEnum[];
    locationId?: string;
    type?: LocationTypeEnum;
}
