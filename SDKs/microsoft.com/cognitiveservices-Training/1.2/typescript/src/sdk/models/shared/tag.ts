import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * Represents a Tag
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageCount" })
  imageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// TagInput
/** 
 * Represents a Tag
**/
export class TagInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description, form, name=Description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;
}
