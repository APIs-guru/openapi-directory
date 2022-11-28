import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetRepositoriesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.RepositoryInfo })
  repositoryInfos?: shared.RepositoryInfo[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.RepositoryInfo })
  repositoryInfos1?: shared.RepositoryInfo[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.RepositoryInfo })
  repositoryInfos2?: shared.RepositoryInfo[];
}


export class SetRepositoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SetRepositoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: SetRepositoriesRequests;

  @SpeakeasyMetadata()
  security: SetRepositoriesSecurity;
}


export class SetRepositoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
