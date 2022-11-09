import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRepositoriesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetRepositoriesSecurity;
}


export class GetRepositoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RepositoryInfo })
  repositoryInfos?: shared.RepositoryInfo[];

  @Metadata()
  statusCode: number;
}
