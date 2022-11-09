import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoToken } from "./enterprisecrmeventbusprototoken";


// EnterpriseCrmEventbusProtoAddress
/** 
 * Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name}], where var_name could be any string of no more than 32 bytes.
**/
export class EnterpriseCrmEventbusProtoAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tokens", elemType: shared.EnterpriseCrmEventbusProtoToken })
  tokens?: EnterpriseCrmEventbusProtoToken[];
}
