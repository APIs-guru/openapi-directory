import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetInstancesIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetInstancesIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdMetadataNamePathParams;

  @Metadata()
  headers: GetInstancesIdMetadataNameHeaders;
}


export class GetInstancesIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
