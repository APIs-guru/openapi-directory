import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetChannelMappingRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  setChannelMappingDto?: shared.SetChannelMappingDto;

  @Metadata({ data: "request, media_type=application/json" })
  setChannelMappingDto1?: shared.SetChannelMappingDto;

  @Metadata({ data: "request, media_type=text/json" })
  setChannelMappingDto2?: shared.SetChannelMappingDto;
}


export class SetChannelMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SetChannelMappingRequest extends SpeakeasyBase {
  @Metadata()
  request: SetChannelMappingRequests;

  @Metadata()
  security: SetChannelMappingSecurity;
}


export class SetChannelMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tunerChannelMapping?: shared.TunerChannelMapping;
}
