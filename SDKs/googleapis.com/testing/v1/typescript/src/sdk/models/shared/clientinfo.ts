import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientInfoDetail } from "./clientinfodetail";


// ClientInfo
/** 
 * Information about the client which invoked the test.
**/
export class ClientInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientInfoDetails", elemType: shared.ClientInfoDetail })
  clientInfoDetails?: ClientInfoDetail[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
