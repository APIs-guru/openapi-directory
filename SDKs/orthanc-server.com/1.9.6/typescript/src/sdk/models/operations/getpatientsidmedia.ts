import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=extended" })
  extended?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transcode" })
  transcode?: string;
}


export class GetPatientsIdMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdMediaPathParams;

  @Metadata()
  queryParams: GetPatientsIdMediaQueryParams;
}


export class GetPatientsIdMediaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
