import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * Represents a Tag
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @Metadata({ data: "json, name=ImageCount, form, name=ImageCount;" })
  imageCount?: number;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;
}
