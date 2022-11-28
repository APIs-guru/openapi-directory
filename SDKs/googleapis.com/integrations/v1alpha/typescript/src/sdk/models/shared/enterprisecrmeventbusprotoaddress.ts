import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoToken } from "./enterprisecrmeventbusprototoken";



// EnterpriseCrmEventbusProtoAddress
/** 
 * Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name}], where var_name could be any string of no more than 32 bytes.
**/
export class EnterpriseCrmEventbusProtoAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tokens", elemType: EnterpriseCrmEventbusProtoToken })
  tokens?: EnterpriseCrmEventbusProtoToken[];
}
