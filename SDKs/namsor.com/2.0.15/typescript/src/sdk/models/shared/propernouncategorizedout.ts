import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProperNounCategorizedOut
/** 
 * Classified typed proper names
**/
export class ProperNounCategorizedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commonType" })
  commonType?: string;

  @SpeakeasyMetadata({ data: "json, name=commonTypeAlt" })
  commonTypeAlt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
