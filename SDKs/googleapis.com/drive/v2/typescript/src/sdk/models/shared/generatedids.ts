import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeneratedIds
/** 
 * A list of generated IDs which can be provided in insert requests
**/
export class GeneratedIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=space" })
  space?: string;
}
