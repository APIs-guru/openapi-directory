import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GitFileSourceRepoTypeEnum {
    Unknown = "UNKNOWN"
,    CloudSourceRepositories = "CLOUD_SOURCE_REPOSITORIES"
,    Github = "GITHUB"
,    BitbucketServer = "BITBUCKET_SERVER"
}


// GitFileSource
/** 
 * GitFileSource describes a file within a (possibly remote) code repository.
**/
export class GitFileSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=bitbucketServerConfig" })
  bitbucketServerConfig?: string;

  @Metadata({ data: "json, name=githubEnterpriseConfig" })
  githubEnterpriseConfig?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=repoType" })
  repoType?: GitFileSourceRepoTypeEnum;

  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
