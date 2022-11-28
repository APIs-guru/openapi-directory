import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimVirtualChassisDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimVirtualChassisDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimVirtualChassisDeletePathParams;
}


export class DcimVirtualChassisDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
