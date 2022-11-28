import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmClientsIdInstallationProvidersProviderIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerId" })
  providerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdInstallationProvidersProviderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsIdInstallationProvidersProviderIdPathParams;
}


export class GetRealmClientsIdInstallationProvidersProviderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
