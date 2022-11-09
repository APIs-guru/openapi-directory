import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetPatientsIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetPatientsIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdMetadataNamePathParams;

  @Metadata()
  headers: GetPatientsIdMetadataNameHeaders;
}


export class GetPatientsIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
