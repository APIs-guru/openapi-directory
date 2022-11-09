import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { HiuSubscriptionContext } from "./hiusubscriptioncontext";


export class HiuSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=hiu" })
  hiu: OrganizationRepresentation;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=patient" })
  patient: ConsentManagerPatientId;

  @Metadata({ data: "json, name=sources", elemType: shared.HiuSubscriptionContext })
  sources: HiuSubscriptionContext[];
}
