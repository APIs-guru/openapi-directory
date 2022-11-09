import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudWebriskV1SearchHashesResponseThreatHash } from "./googlecloudwebriskv1searchhashesresponsethreathash";


export class GoogleCloudWebriskV1SearchHashesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=negativeExpireTime" })
  negativeExpireTime?: string;

  @Metadata({ data: "json, name=threats", elemType: shared.GoogleCloudWebriskV1SearchHashesResponseThreatHash })
  threats?: GoogleCloudWebriskV1SearchHashesResponseThreatHash[];
}
