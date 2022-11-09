import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdArchiveQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=transcode" })
  transcode?: string;
}


export class GetPatientsIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdArchivePathParams;

  @Metadata()
  queryParams: GetPatientsIdArchiveQueryParams;
}


export class GetPatientsIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
