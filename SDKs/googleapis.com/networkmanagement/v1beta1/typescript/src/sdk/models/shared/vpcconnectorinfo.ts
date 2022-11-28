import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcConnectorInfo
/** 
 * For display only. Metadata associated with a VPC connector.
**/
export class VpcConnectorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
