import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatientSmsNotifcationRequestNotificationHip extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PatientSmsNotifcationRequestNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContextInfo" })
  careContextInfo: string;

  @Metadata({ data: "json, name=deeplinkUrl" })
  deeplinkUrl?: string;

  @Metadata({ data: "json, name=hip" })
  hip: PatientSmsNotifcationRequestNotificationHip;

  @Metadata({ data: "json, name=phoneNo" })
  phoneNo: string;

  @Metadata({ data: "json, name=receiverName" })
  receiverName?: string;
}


export class PatientSmsNotifcationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=notification" })
  notification: PatientSmsNotifcationRequestNotification;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
