import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcConnectorInfo
/** 
 * For display only. Metadata associated with a VPC connector.
**/
export class VpcConnectorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
