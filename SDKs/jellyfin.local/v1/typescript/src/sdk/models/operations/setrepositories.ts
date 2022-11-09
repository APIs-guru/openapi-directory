import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetRepositoriesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json", elemType: shared.RepositoryInfo })
  repositoryInfos?: shared.RepositoryInfo[];

  @Metadata({ data: "request, media_type=application/json", elemType: shared.RepositoryInfo })
  repositoryInfos1?: shared.RepositoryInfo[];

  @Metadata({ data: "request, media_type=text/json", elemType: shared.RepositoryInfo })
  repositoryInfos2?: shared.RepositoryInfo[];
}


export class SetRepositoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SetRepositoriesRequest extends SpeakeasyBase {
  @Metadata()
  request?: SetRepositoriesRequests;

  @Metadata()
  security: SetRepositoriesSecurity;
}


export class SetRepositoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
