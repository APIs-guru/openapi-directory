import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtrasTopologyMapsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTopologyMapsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasTopologyMapsDeletePathParams;
}


export class ExtrasTopologyMapsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
