import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimRackRolesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackRolesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRackRolesDeletePathParams;
}


export class DcimRackRolesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
