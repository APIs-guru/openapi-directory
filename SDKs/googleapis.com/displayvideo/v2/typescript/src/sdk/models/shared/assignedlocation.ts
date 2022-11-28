import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssignedLocationInput
/** 
 * An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
**/
export class AssignedLocationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}


// AssignedLocation
/** 
 * An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
**/
export class AssignedLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedLocationId" })
  assignedLocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
