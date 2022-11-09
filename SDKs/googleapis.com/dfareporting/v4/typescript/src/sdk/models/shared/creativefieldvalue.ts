import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreativeFieldValue
/** 
 * Contains properties of a creative field value.
**/
export class CreativeFieldValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
