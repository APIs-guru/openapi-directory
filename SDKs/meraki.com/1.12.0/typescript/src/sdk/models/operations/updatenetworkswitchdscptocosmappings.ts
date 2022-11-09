import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchDscpToCosMappingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings extends SpeakeasyBase {
  @Metadata({ data: "json, name=cos" })
  cos: number;

  @Metadata({ data: "json, name=dscp" })
  dscp: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class UpdateNetworkSwitchDscpToCosMappingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=mappings", elemType: operations.UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings })
  mappings: UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings[];
}


export class UpdateNetworkSwitchDscpToCosMappingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchDscpToCosMappingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSwitchDscpToCosMappingsRequestBody;
}


export class UpdateNetworkSwitchDscpToCosMappingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchDscpToCosMappings200ApplicationJsonObject?: Map<string, any>;
}
