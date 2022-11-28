import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSpecProductTypeListOfWorkgroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PostSpecProductTypeListOfWorkgroupRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  wgSpecPrdTypeRegPersistVo?: any;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-json-smile" })
  wgSpecPrdTypeRegPersistVo1?: any;
}


export class PostSpecProductTypeListOfWorkgroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSpecProductTypeListOfWorkgroupPathParams;

  @SpeakeasyMetadata()
  request?: PostSpecProductTypeListOfWorkgroupRequests;
}


export class PostSpecProductTypeListOfWorkgroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wgSpecPrdTypeRegPersistVo?: any;
}
