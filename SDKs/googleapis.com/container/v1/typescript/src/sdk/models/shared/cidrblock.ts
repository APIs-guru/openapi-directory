import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CidrBlock
/** 
 * CidrBlock contains an optional name and one CIDR block.
**/
export class CidrBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidrBlock" })
  cidrBlock?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
