import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MemberRestriction
/** 
 * The definition of MemberRestriction
**/
export class MemberRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;
}
