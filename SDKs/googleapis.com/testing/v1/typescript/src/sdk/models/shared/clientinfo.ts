import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientInfoDetail } from "./clientinfodetail";



// ClientInfo
/** 
 * Information about the client which invoked the test.
**/
export class ClientInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientInfoDetails", elemType: ClientInfoDetail })
  clientInfoDetails?: ClientInfoDetail[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
