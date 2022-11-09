import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRealmUsersIdDisableCredentialTypesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdDisableCredentialTypesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmUsersIdDisableCredentialTypesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class PutRealmUsersIdDisableCredentialTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
