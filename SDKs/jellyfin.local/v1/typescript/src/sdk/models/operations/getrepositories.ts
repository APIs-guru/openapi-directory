import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRepositoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRepositoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetRepositoriesSecurity;
}


export class GetRepositoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RepositoryInfo })
  repositoryInfos?: shared.RepositoryInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
