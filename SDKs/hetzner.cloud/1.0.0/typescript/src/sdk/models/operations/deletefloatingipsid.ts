import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFloatingIpsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteFloatingIpsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFloatingIpsIdPathParams;
}


export class DeleteFloatingIpsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
