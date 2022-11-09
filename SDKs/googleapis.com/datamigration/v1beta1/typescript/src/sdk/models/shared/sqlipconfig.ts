import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SqlAclEntry } from "./sqlaclentry";


// SqlIpConfig
/** 
 * IP Management configuration.
**/
export class SqlIpConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizedNetworks", elemType: shared.SqlAclEntry })
  authorizedNetworks?: SqlAclEntry[];

  @Metadata({ data: "json, name=enableIpv4" })
  enableIpv4?: boolean;

  @Metadata({ data: "json, name=privateNetwork" })
  privateNetwork?: string;

  @Metadata({ data: "json, name=requireSsl" })
  requireSsl?: boolean;
}
