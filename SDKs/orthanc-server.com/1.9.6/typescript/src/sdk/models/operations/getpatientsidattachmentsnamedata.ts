import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdAttachmentsNameDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetPatientsIdAttachmentsNameDataHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetPatientsIdAttachmentsNameDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdAttachmentsNameDataPathParams;

  @Metadata()
  headers: GetPatientsIdAttachmentsNameDataHeaders;
}


export class GetPatientsIdAttachmentsNameDataResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
