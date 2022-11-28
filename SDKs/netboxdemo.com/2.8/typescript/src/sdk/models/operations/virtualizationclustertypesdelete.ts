import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VirtualizationClusterTypesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClusterTypesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationClusterTypesDeletePathParams;
}


export class VirtualizationClusterTypesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
