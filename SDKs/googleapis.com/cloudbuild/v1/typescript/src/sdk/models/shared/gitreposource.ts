import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GitRepoSourceRepoTypeEnum {
    Unknown = "UNKNOWN",
    CloudSourceRepositories = "CLOUD_SOURCE_REPOSITORIES",
    Github = "GITHUB",
    BitbucketServer = "BITBUCKET_SERVER"
}


// GitRepoSource
/** 
 * GitRepoSource describes a repo and ref of a code repository.
**/
export class GitRepoSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bitbucketServerConfig" })
  bitbucketServerConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=githubEnterpriseConfig" })
  githubEnterpriseConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "json, name=repoType" })
  repoType?: GitRepoSourceRepoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
