import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStrainsByPositionUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chr" })
  chr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mapKey" })
  mapKey: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=start" })
  start: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stop" })
  stop: number;
}


export class GetStrainsByPositionUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStrainsByPositionUsingGetPathParams;
}


export class GetStrainsByPositionUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
