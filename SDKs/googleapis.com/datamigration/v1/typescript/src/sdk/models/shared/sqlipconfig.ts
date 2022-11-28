import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlAclEntry } from "./sqlaclentry";



// SqlIpConfig
/** 
 * IP Management configuration.
**/
export class SqlIpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizedNetworks", elemType: SqlAclEntry })
  authorizedNetworks?: SqlAclEntry[];

  @SpeakeasyMetadata({ data: "json, name=enableIpv4" })
  enableIpv4?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privateNetwork" })
  privateNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=requireSsl" })
  requireSsl?: boolean;
}
