import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CidrBlock
/** 
 * CIDR block with an optional name.
**/
export class CidrBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidrBlock" })
  cidrBlock?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
