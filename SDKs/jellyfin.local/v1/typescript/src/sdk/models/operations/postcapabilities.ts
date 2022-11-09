import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCapabilitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=playableMediaTypes" })
  playableMediaTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportedCommands" })
  supportedCommands?: shared.GeneralCommandTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsMediaControl" })
  supportsMediaControl?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsPersistentIdentifier" })
  supportsPersistentIdentifier?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsSync" })
  supportsSync?: boolean;
}


export class PostCapabilitiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostCapabilitiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCapabilitiesQueryParams;

  @Metadata()
  security: PostCapabilitiesSecurity;
}


export class PostCapabilitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
