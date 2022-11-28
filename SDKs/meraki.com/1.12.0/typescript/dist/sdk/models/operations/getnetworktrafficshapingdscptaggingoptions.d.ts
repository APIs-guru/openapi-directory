import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkTrafficShapingDscpTaggingOptionsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkTrafficShapingDscpTaggingOptionsRequest extends SpeakeasyBase {
    pathParams: GetNetworkTrafficShapingDscpTaggingOptionsPathParams;
}
export declare class GetNetworkTrafficShapingDscpTaggingOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkTrafficShapingDscpTaggingOptions200ApplicationJsonObject?: Map<string, any>;
}
