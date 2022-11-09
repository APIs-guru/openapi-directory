import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventCategoryDetail } from "./eventcategorydetail";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";


export class HiuSubscriptionEventContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=context", elemType: shared.EventCategoryDetail })
  context: EventCategoryDetail[];

  @Metadata({ data: "json, name=hip" })
  hip: OrganizationRepresentation;

  @Metadata({ data: "json, name=patient" })
  patient: ConsentManagerPatientId;
}
