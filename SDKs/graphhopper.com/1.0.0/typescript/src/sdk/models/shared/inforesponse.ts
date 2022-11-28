import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InfoResponse
/** 
 * Information about the server and the geographical area that it covers.
**/
export class InfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bbox" })
  bbox?: string;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
