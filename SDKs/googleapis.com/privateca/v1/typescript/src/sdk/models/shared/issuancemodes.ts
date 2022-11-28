import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IssuanceModes
/** 
 * IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool.
**/
export class IssuanceModes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowConfigBasedIssuance" })
  allowConfigBasedIssuance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowCsrBasedIssuance" })
  allowCsrBasedIssuance?: boolean;
}
