import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCategoryDetail } from "./eventcategorydetail";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";



export class HiuSubscriptionEventContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context", elemType: EventCategoryDetail })
  context: EventCategoryDetail[];

  @SpeakeasyMetadata({ data: "json, name=hip" })
  hip: OrganizationRepresentation;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: ConsentManagerPatientId;
}
