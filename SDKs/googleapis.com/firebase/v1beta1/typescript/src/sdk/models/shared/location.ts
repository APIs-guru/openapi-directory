import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LocationFeaturesEnum {
    LocationFeatureUnspecified = "LOCATION_FEATURE_UNSPECIFIED"
,    Firestore = "FIRESTORE"
,    DefaultStorage = "DEFAULT_STORAGE"
,    Functions = "FUNCTIONS"
}

export enum LocationTypeEnum {
    LocationTypeUnspecified = "LOCATION_TYPE_UNSPECIFIED"
,    Regional = "REGIONAL"
,    MultiRegional = "MULTI_REGIONAL"
}


// Location
/** 
 * A GCP resource location that can be selected for a FirebaseProject.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=features" })
  features?: LocationFeaturesEnum[];

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=type" })
  type?: LocationTypeEnum;
}
