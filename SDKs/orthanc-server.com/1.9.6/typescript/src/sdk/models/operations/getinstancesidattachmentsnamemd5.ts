import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdAttachmentsNameMd5PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetInstancesIdAttachmentsNameMd5Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetInstancesIdAttachmentsNameMd5Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdAttachmentsNameMd5PathParams;

  @SpeakeasyMetadata()
  headers: GetInstancesIdAttachmentsNameMd5Headers;
}


export class GetInstancesIdAttachmentsNameMd5Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
