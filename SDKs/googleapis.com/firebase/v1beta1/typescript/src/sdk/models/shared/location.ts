import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LocationFeaturesEnum {
    LocationFeatureUnspecified = "LOCATION_FEATURE_UNSPECIFIED",
    Firestore = "FIRESTORE",
    DefaultStorage = "DEFAULT_STORAGE",
    Functions = "FUNCTIONS"
}

export enum LocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED",
    Regional = "REGIONAL",
    MultiRegional = "MULTI_REGIONAL"
}


// Location
/** 
 * A GCP resource location that can be selected for a FirebaseProject.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: LocationFeaturesEnum[];

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LocationTypeEnum;
}
