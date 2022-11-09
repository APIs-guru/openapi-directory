import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InfoResponse
/** 
 * Information about the server and the geographical area that it covers.
**/
export class InfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bbox" })
  bbox?: string;

  @Metadata({ data: "json, name=features" })
  features?: Map<string, any>;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
