import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationList } from "./applicationlist";
import { OrganizationList } from "./organizationlist";



export class RegistrationsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity" })
  activity?: string;

  @SpeakeasyMetadata({ data: "json, name=activity_description" })
  activityDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=applications", elemType: ApplicationList })
  applications?: ApplicationList[];

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization: OrganizationList;

  @SpeakeasyMetadata({ data: "json, name=registration_no" })
  registrationNo?: string;
}
