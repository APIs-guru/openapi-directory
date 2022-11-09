import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsCloudidentityDevicesV1CustomAttributeValue
/** 
 * Additional custom attribute values may be one of these types
**/
export class GoogleAppsCloudidentityDevicesV1CustomAttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=numberValue" })
  numberValue?: number;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
