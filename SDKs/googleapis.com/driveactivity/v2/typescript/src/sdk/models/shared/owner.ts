import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
import { DriveReference } from "./drivereference";
import { TeamDriveReference } from "./teamdrivereference";
import { User } from "./user";



// Owner
/** 
 * Information about the owner of a Drive item.
**/
export class Owner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: Domain;

  @SpeakeasyMetadata({ data: "json, name=drive" })
  drive?: DriveReference;

  @SpeakeasyMetadata({ data: "json, name=teamDrive" })
  teamDrive?: TeamDriveReference;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
