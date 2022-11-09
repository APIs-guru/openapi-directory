import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGenesByAffyIdUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=affyId" })
  affyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetGenesByAffyIdUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenesByAffyIdUsingGetPathParams;
}


export class GetGenesByAffyIdUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
