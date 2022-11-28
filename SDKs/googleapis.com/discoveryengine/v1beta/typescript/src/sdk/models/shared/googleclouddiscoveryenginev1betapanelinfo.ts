import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1betaPanelInfo
/** 
 * Detailed panel information associated with a user event.
**/
export class GoogleCloudDiscoveryengineV1betaPanelInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=panelId" })
  panelId?: string;

  @SpeakeasyMetadata({ data: "json, name=panelPosition" })
  panelPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPanels" })
  totalPanels?: number;
}
