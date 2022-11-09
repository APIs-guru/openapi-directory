import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Feature
/** 
 * A feature of an entity mention.
**/
export class Feature extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
