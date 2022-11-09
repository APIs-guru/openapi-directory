import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAffectedGenomicModelsUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxonId" })
  taxonId: string;
}


export class GetAffectedGenomicModelsUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAffectedGenomicModelsUsingGetPathParams;
}


export class GetAffectedGenomicModelsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
