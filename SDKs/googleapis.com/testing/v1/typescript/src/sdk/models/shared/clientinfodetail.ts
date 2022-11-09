import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClientInfoDetail
/** 
 * Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.
**/
export class ClientInfoDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
