import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmailTemplate
/** 
 * Template for an email template.
**/
export class EmailTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=fromDisplayName" })
  fromDisplayName?: string;

  @Metadata({ data: "json, name=replyTo" })
  replyTo?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}
