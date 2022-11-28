import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailTemplate
/** 
 * Template for an email template.
**/
export class EmailTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=fromDisplayName" })
  fromDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=replyTo" })
  replyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}
