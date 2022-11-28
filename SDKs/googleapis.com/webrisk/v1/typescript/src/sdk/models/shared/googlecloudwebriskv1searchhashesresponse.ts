import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudWebriskV1SearchHashesResponseThreatHash } from "./googlecloudwebriskv1searchhashesresponsethreathash";



export class GoogleCloudWebriskV1SearchHashesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negativeExpireTime" })
  negativeExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=threats", elemType: GoogleCloudWebriskV1SearchHashesResponseThreatHash })
  threats?: GoogleCloudWebriskV1SearchHashesResponseThreatHash[];
}
