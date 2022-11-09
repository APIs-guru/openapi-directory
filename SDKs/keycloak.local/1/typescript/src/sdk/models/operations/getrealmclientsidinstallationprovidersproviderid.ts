import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmClientsIdInstallationProvidersProviderIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=providerId" })
  providerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdInstallationProvidersProviderIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdInstallationProvidersProviderIdPathParams;
}


export class GetRealmClientsIdInstallationProvidersProviderIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
