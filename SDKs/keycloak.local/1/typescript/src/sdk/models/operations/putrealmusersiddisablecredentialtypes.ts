import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRealmUsersIdDisableCredentialTypesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdDisableCredentialTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmUsersIdDisableCredentialTypesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class PutRealmUsersIdDisableCredentialTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
