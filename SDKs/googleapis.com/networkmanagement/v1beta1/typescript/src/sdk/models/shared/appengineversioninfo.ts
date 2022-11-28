import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppEngineVersionInfo
/** 
 * For display only. Metadata associated with an App Engine version.
**/
export class AppEngineVersionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=runtime" })
  runtime?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
