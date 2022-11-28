import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmCredentialRegistratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmCredentialRegistratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmCredentialRegistratorsPathParams;
}


export class GetRealmCredentialRegistratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmCredentialRegistrators2XxApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
