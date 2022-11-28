import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeneratedIds
/** 
 * A list of generated IDs which can be provided in insert requests
**/
export class GeneratedIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=space" })
  space?: string;
}
