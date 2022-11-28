import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsentArtefactReference } from "./consentartefactreference";
import { ConsentStatusEnum } from "./consentstatusenum";



export class HiuConsentNotificationEventNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentArtefacts", elemType: ConsentArtefactReference })
  consentArtefacts?: ConsentArtefactReference[];

  @SpeakeasyMetadata({ data: "json, name=consentRequestId" })
  consentRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ConsentStatusEnum;
}


export class HiuConsentNotificationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification: HiuConsentNotificationEventNotification;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
