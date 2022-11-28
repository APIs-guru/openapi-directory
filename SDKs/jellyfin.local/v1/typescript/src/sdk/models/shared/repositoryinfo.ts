import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepositoryInfo
/** 
 * Class RepositoryInfo.
**/
export class RepositoryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
