import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { HiuSubscriptionContext } from "./hiusubscriptioncontext";



export class HiuSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hiu" })
  hiu: OrganizationRepresentation;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: ConsentManagerPatientId;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: HiuSubscriptionContext })
  sources: HiuSubscriptionContext[];
}
