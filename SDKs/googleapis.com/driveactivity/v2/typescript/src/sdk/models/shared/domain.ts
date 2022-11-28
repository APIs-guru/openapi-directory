import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Domain
/** 
 * Information about a domain.
**/
export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=legacyId" })
  legacyId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
