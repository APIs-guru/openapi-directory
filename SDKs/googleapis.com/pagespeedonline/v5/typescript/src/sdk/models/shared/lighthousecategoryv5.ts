import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditRefs } from "./auditrefs";


// LighthouseCategoryV5
/** 
 * A Lighthouse category.
**/
export class LighthouseCategoryV5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditRefs", elemType: shared.AuditRefs })
  auditRefs?: AuditRefs[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=manualDescription" })
  manualDescription?: string;

  @Metadata({ data: "json, name=score" })
  score?: any;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
