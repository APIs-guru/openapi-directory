import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCapabilitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playableMediaTypes" })
  playableMediaTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportedCommands" })
  supportedCommands?: shared.GeneralCommandTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsMediaControl" })
  supportsMediaControl?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsPersistentIdentifier" })
  supportsPersistentIdentifier?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsSync" })
  supportsSync?: boolean;
}


export class PostCapabilitiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostCapabilitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCapabilitiesQueryParams;

  @SpeakeasyMetadata()
  security: PostCapabilitiesSecurity;
}


export class PostCapabilitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
