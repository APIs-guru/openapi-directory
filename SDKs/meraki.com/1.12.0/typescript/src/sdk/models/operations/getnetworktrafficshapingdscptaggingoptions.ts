import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkTrafficShapingDscpTaggingOptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkTrafficShapingDscpTaggingOptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkTrafficShapingDscpTaggingOptionsPathParams;
}


export class GetNetworkTrafficShapingDscpTaggingOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkTrafficShapingDscpTaggingOptions200ApplicationJsonObject?: Map<string, any>;
}
