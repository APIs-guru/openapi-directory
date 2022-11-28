import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagBindingInput
/** 
 * A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.
**/
export class TagBindingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=tagValue" })
  tagValue?: string;
}


// TagBinding
/** 
 * A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.
**/
export class TagBinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=tagValue" })
  tagValue?: string;
}
