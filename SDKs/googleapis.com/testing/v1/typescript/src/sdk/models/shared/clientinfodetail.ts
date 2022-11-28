import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClientInfoDetail
/** 
 * Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.
**/
export class ClientInfoDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
