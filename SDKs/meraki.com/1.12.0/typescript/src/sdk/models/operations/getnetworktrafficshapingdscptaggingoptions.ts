import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkTrafficShapingDscpTaggingOptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkTrafficShapingDscpTaggingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkTrafficShapingDscpTaggingOptionsPathParams;
}


export class GetNetworkTrafficShapingDscpTaggingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkTrafficShapingDscpTaggingOptions200ApplicationJsonObject?: Map<string, any>;
}
