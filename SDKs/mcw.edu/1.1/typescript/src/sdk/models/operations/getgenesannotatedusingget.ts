import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGenesAnnotatedUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetGenesAnnotatedUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenesAnnotatedUsingGetPathParams;
}


export class GetGenesAnnotatedUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
