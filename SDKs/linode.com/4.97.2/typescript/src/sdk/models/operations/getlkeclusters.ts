import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLkeClustersSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLkeClustersSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLkeClustersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLkeClustersSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLkeClustersSecurityOption2;
}


export class GetLkeClustersRequest extends SpeakeasyBase {
  @Metadata()
  security: GetLkeClustersSecurity;
}


export class GetLkeClusters200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.LkeCluster })
  data?: shared.LkeCluster[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetLkeClustersDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeClustersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLkeClusters200ApplicationJsonObject?: GetLkeClusters200ApplicationJson;

  @Metadata()
  getLkeClustersDefaultApplicationJsonObject?: GetLkeClustersDefaultApplicationJson;
}
