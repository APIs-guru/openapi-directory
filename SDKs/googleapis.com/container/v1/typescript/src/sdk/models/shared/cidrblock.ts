import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CidrBlock
/** 
 * CidrBlock contains an optional name and one CIDR block.
**/
export class CidrBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidrBlock" })
  cidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
