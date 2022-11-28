import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreativeFieldValue
/** 
 * Contains properties of a creative field value.
**/
export class CreativeFieldValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
