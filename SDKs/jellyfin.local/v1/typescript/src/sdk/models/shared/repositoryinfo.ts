import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepositoryInfo
/** 
 * Class RepositoryInfo.
**/
export class RepositoryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
