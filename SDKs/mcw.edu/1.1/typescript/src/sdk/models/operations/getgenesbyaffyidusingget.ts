import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGenesByAffyIdUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=affyId" })
  affyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetGenesByAffyIdUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenesByAffyIdUsingGetPathParams;
}


export class GetGenesByAffyIdUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
