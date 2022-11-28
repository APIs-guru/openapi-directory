import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VacationSettings
/** 
 * Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface.
**/
export class VacationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableAutoReply" })
  enableAutoReply?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=responseBodyHtml" })
  responseBodyHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=responseBodyPlainText" })
  responseBodyPlainText?: string;

  @SpeakeasyMetadata({ data: "json, name=responseSubject" })
  responseSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictToContacts" })
  restrictToContacts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restrictToDomain" })
  restrictToDomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
