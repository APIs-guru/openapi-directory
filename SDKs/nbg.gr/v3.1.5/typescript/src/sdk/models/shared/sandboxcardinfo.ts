import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxCardInfo
/** 
 * Sandbox card information
**/
export class SandboxCardInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableBalance" })
  availableBalance?: number;

  @Metadata({ data: "json, name=creditLimit" })
  creditLimit?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expiration" })
  expiration: string;

  @Metadata({ data: "json, name=holderName" })
  holderName: string;

  @Metadata({ data: "json, name=ledgerBalance" })
  ledgerBalance?: number;

  @Metadata({ data: "json, name=number" })
  number: string;

  @Metadata({ data: "json, name=subType" })
  subType?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
