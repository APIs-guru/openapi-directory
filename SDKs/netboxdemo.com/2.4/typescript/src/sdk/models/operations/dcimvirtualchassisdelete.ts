import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimVirtualChassisDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimVirtualChassisDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimVirtualChassisDeletePathParams;
}


export class DcimVirtualChassisDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
