import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GitRepoSourceRepoTypeEnum {
    Unknown = "UNKNOWN"
,    CloudSourceRepositories = "CLOUD_SOURCE_REPOSITORIES"
,    Github = "GITHUB"
,    BitbucketServer = "BITBUCKET_SERVER"
}


// GitRepoSource
/** 
 * GitRepoSource describes a repo and ref of a code repository.
**/
export class GitRepoSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=bitbucketServerConfig" })
  bitbucketServerConfig?: string;

  @Metadata({ data: "json, name=githubEnterpriseConfig" })
  githubEnterpriseConfig?: string;

  @Metadata({ data: "json, name=ref" })
  ref?: string;

  @Metadata({ data: "json, name=repoType" })
  repoType?: GitRepoSourceRepoTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
