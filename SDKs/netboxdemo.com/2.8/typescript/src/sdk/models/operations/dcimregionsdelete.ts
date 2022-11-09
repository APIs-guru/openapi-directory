import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimRegionsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRegionsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRegionsDeletePathParams;
}


export class DcimRegionsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
