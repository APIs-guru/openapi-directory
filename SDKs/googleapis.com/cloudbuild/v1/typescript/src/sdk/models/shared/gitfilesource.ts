import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GitFileSourceRepoTypeEnum {
    Unknown = "UNKNOWN",
    CloudSourceRepositories = "CLOUD_SOURCE_REPOSITORIES",
    Github = "GITHUB",
    BitbucketServer = "BITBUCKET_SERVER"
}


// GitFileSource
/** 
 * GitFileSource describes a file within a (possibly remote) code repository.
**/
export class GitFileSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bitbucketServerConfig" })
  bitbucketServerConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=githubEnterpriseConfig" })
  githubEnterpriseConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=repoType" })
  repoType?: GitFileSourceRepoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
