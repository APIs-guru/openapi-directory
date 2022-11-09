import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebEntity
/** 
 * Entity deduced from similar images on the Internet.
**/
export class WebEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=entityId" })
  entityId?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
