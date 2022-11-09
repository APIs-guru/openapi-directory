import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RedirectionSettings
/** 
 * The configuration for redirection per service
**/
export class RedirectionSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: number;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=to" })
  to: string;
}
