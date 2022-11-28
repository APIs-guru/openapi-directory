import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdAttachmentsNameSizePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetInstancesIdAttachmentsNameSizeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetInstancesIdAttachmentsNameSizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdAttachmentsNameSizePathParams;

  @SpeakeasyMetadata()
  headers: GetInstancesIdAttachmentsNameSizeHeaders;
}


export class GetInstancesIdAttachmentsNameSizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
