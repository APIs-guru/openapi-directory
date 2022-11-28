import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLegPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=leg_id" })
  legId: string;
}


export class DeleteLegRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLegPathParams;
}


export class DeleteLegResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteLeg200ApplicationJsonObject?: Map<string, any>;
}
