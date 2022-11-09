import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssignedLocation
/** 
 * An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
**/
export class AssignedLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignedLocationId" })
  assignedLocationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
