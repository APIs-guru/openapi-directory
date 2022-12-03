import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstitutionV1
/** 
 * Institutions are the entities that create insurance policies.
**/
export class InstitutionV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
