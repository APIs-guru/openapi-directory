import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Subject
/** 
 * Subject refers to the subject of the intoto statement
**/
export class Subject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
