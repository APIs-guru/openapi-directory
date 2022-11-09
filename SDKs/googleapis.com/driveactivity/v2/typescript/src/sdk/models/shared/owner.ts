import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Domain } from "./domain";
import { DriveReference } from "./drivereference";
import { TeamDriveReference } from "./teamdrivereference";
import { User } from "./user";


// Owner
/** 
 * Information about the owner of a Drive item.
**/
export class Owner extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: Domain;

  @Metadata({ data: "json, name=drive" })
  drive?: DriveReference;

  @Metadata({ data: "json, name=teamDrive" })
  teamDrive?: TeamDriveReference;

  @Metadata({ data: "json, name=user" })
  user?: User;
}
