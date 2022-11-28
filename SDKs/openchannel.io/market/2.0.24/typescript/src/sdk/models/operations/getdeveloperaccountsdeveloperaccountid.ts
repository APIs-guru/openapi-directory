import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeveloperAccountsDeveloperAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerAccountId" })
  developerAccountId: string;
}


export class GetDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeveloperAccountsDeveloperAccountIdPathParams;
}


export class GetDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
