import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePlacementGroupsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeletePlacementGroupsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePlacementGroupsIdPathParams;
}


export class DeletePlacementGroupsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
