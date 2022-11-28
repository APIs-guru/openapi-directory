import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsCloudidentityDevicesV1CustomAttributeValue
/** 
 * Additional custom attribute values may be one of these types
**/
export class GoogleAppsCloudidentityDevicesV1CustomAttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=numberValue" })
  numberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
