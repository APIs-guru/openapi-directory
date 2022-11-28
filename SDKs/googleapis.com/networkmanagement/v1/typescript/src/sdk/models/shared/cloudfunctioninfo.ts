import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudFunctionInfo
/** 
 * For display only. Metadata associated with a Cloud Function.
**/
export class CloudFunctionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: string;
}
