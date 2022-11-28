import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimRearPortTemplatesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortTemplatesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRearPortTemplatesDeletePathParams;
}


export class DcimRearPortTemplatesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
