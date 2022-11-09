import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeveloperAccountsDeveloperAccountIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=developerAccountId" })
  developerAccountId: string;
}


export class GetDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeveloperAccountsDeveloperAccountIdPathParams;
}


export class GetDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
