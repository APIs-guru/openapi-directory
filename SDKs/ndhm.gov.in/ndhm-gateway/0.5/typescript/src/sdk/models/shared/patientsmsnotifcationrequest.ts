import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatientSmsNotifcationRequestNotificationHip extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PatientSmsNotifcationRequestNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContextInfo" })
  careContextInfo: string;

  @SpeakeasyMetadata({ data: "json, name=deeplinkUrl" })
  deeplinkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=hip" })
  hip: PatientSmsNotifcationRequestNotificationHip;

  @SpeakeasyMetadata({ data: "json, name=phoneNo" })
  phoneNo: string;

  @SpeakeasyMetadata({ data: "json, name=receiverName" })
  receiverName?: string;
}


export class PatientSmsNotifcationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification: PatientSmsNotifcationRequestNotification;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
