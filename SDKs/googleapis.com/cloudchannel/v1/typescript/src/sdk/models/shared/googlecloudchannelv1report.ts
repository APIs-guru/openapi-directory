import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Column } from "./googlecloudchannelv1column";



// GoogleCloudChannelV1Report
/** 
 * The ID and description of a report that was used to generate report data. For example, "GCP Daily Spend", "Google Workspace License Activity", etc.
**/
export class GoogleCloudChannelV1Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: GoogleCloudChannelV1Column })
  columns?: GoogleCloudChannelV1Column[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
