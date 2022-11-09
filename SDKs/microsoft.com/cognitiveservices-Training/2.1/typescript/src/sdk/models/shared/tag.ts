import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * Represents a Tag
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=description, form, name=description;" })
  description?: string;

  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: string;

  @Metadata({ data: "json, name=imageCount, form, name=imageCount;" })
  imageCount?: number;

  @Metadata({ data: "json, name=name, form, name=name;" })
  name?: string;
}
