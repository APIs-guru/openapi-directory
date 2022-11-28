import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxCardInfo
/** 
 * Sandbox card information
**/
export class SandboxCardInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableBalance" })
  availableBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=creditLimit" })
  creditLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration: string;

  @SpeakeasyMetadata({ data: "json, name=holderName" })
  holderName: string;

  @SpeakeasyMetadata({ data: "json, name=ledgerBalance" })
  ledgerBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "json, name=subType" })
  subType?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
