import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Domain
/** 
 * Information about a domain.
**/
export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=legacyId" })
  legacyId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
