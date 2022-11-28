import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClientInfo
/** 
 * Information about the client
**/
export class ClientInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firmware" })
  firmware?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
