import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeneratedIds
/** 
 * A list of generated file IDs which can be provided in create requests.
**/
export class GeneratedIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=space" })
  space?: string;
}
