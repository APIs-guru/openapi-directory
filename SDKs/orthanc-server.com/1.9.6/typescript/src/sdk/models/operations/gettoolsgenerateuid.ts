import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetToolsGenerateUidQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=level" })
  level: string;
}


export class GetToolsGenerateUidRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetToolsGenerateUidQueryParams;
}


export class GetToolsGenerateUidResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
