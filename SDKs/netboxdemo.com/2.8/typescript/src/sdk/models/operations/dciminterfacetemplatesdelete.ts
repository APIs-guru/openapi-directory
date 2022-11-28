import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimInterfaceTemplatesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfaceTemplatesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimInterfaceTemplatesDeletePathParams;
}


export class DcimInterfaceTemplatesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
