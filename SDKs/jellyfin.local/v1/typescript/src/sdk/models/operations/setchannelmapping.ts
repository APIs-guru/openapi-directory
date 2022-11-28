import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetChannelMappingRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  setChannelMappingDto?: shared.SetChannelMappingDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  setChannelMappingDto1?: shared.SetChannelMappingDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  setChannelMappingDto2?: shared.SetChannelMappingDto;
}


export class SetChannelMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SetChannelMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SetChannelMappingRequests;

  @SpeakeasyMetadata()
  security: SetChannelMappingSecurity;
}


export class SetChannelMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tunerChannelMapping?: shared.TunerChannelMapping;
}
