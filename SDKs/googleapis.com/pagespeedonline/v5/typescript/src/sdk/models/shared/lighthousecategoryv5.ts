import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditRefs } from "./auditrefs";



// LighthouseCategoryV5
/** 
 * A Lighthouse category.
**/
export class LighthouseCategoryV5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditRefs", elemType: AuditRefs })
  auditRefs?: AuditRefs[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=manualDescription" })
  manualDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: any;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
