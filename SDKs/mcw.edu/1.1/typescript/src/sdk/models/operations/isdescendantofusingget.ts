import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IsDescendantOfUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accId1" })
  accId1: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accId2" })
  accId2: string;
}


export class IsDescendantOfUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IsDescendantOfUsingGetPathParams;
}


export class IsDescendantOfUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
