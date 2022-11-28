import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VirtualizationClusterGroupsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClusterGroupsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationClusterGroupsDeletePathParams;
}


export class VirtualizationClusterGroupsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
