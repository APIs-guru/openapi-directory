import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchDscpToCosMappingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cos" })
  cos: number;

  @SpeakeasyMetadata({ data: "json, name=dscp" })
  dscp: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class UpdateNetworkSwitchDscpToCosMappingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mappings", elemType: UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings })
  mappings: UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings[];
}


export class UpdateNetworkSwitchDscpToCosMappingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchDscpToCosMappingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSwitchDscpToCosMappingsRequestBody;
}


export class UpdateNetworkSwitchDscpToCosMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchDscpToCosMappings200ApplicationJsonObject?: Map<string, any>;
}
