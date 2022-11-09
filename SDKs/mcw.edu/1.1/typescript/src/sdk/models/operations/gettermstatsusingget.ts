import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTermStatsUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=filterAccId" })
  filterAccId: string;
}


export class GetTermStatsUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTermStatsUsingGetPathParams;
}


export class GetTermStatsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
