import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IsDescendantOfUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId1" })
  accId1: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId2" })
  accId2: string;
}


export class IsDescendantOfUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IsDescendantOfUsingGetPathParams;
}


export class IsDescendantOfUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
