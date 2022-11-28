import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VirtualizationClustersDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClustersDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VirtualizationClustersDeletePathParams;
}


export class VirtualizationClustersDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
