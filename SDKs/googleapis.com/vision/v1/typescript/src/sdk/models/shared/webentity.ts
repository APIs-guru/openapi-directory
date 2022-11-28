import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebEntity
/** 
 * Entity deduced from similar images on the Internet.
**/
export class WebEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
