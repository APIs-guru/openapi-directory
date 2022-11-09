import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProperNounCategorizedOut
/** 
 * Classified typed proper names
**/
export class ProperNounCategorizedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=commonType" })
  commonType?: string;

  @Metadata({ data: "json, name=commonTypeAlt" })
  commonTypeAlt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
