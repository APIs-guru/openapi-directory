import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudFunctionInfo
/** 
 * For display only. Metadata associated with a Cloud Function.
**/
export class CloudFunctionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=versionId" })
  versionId?: string;
}
