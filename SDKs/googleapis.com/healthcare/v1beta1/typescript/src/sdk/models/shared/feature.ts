import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Feature
/** 
 * A feature of an entity mention.
**/
export class Feature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
