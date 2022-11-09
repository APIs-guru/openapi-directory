import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsentArtefactReference } from "./consentartefactreference";
import { ConsentStatusEnum } from "./consentstatusenum";


export class HiuConsentNotificationEventNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentArtefacts", elemType: shared.ConsentArtefactReference })
  consentArtefacts?: ConsentArtefactReference[];

  @Metadata({ data: "json, name=consentRequestId" })
  consentRequestId: string;

  @Metadata({ data: "json, name=status" })
  status: ConsentStatusEnum;
}


export class HiuConsentNotificationEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=notification" })
  notification: HiuConsentNotificationEventNotification;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
