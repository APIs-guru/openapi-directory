import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationList } from "./applicationlist";
import { OrganizationList } from "./organizationlist";


export class RegistrationsList extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity" })
  activity?: string;

  @Metadata({ data: "json, name=activity_description" })
  activityDescription?: string;

  @Metadata({ data: "json, name=applications", elemType: shared.ApplicationList })
  applications?: ApplicationList[];

  @Metadata({ data: "json, name=organization" })
  organization: OrganizationList;

  @Metadata({ data: "json, name=registration_no" })
  registrationNo?: string;
}
