import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmCredentialRegistratorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmCredentialRegistratorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmCredentialRegistratorsPathParams;
}


export class GetRealmCredentialRegistratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmCredentialRegistrators2XxApplicationJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
