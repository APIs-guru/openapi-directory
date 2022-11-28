import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RedirectionSettings
/** 
 * The configuration for redirection per service
**/
export class RedirectionSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: number;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}
