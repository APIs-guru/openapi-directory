import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CidrBlock
/** 
 * CIDR block with an optional name.
**/
export class CidrBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidrBlock" })
  cidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
