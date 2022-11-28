import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAffectedGenomicModelsUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetAffectedGenomicModelsUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAffectedGenomicModelsUsingGetPathParams;
}


export class GetAffectedGenomicModelsUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
