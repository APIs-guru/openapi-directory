import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VacationSettings
/** 
 * Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface.
**/
export class VacationSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableAutoReply" })
  enableAutoReply?: boolean;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=responseBodyHtml" })
  responseBodyHtml?: string;

  @Metadata({ data: "json, name=responseBodyPlainText" })
  responseBodyPlainText?: string;

  @Metadata({ data: "json, name=responseSubject" })
  responseSubject?: string;

  @Metadata({ data: "json, name=restrictToContacts" })
  restrictToContacts?: boolean;

  @Metadata({ data: "json, name=restrictToDomain" })
  restrictToDomain?: boolean;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
