import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRemoteImageProvidersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetRemoteImageProvidersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRemoteImageProvidersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRemoteImageProvidersPathParams;

  @Metadata()
  security: GetRemoteImageProvidersSecurity;
}


export class GetRemoteImageProvidersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ImageProviderInfo })
  imageProviderInfos?: shared.ImageProviderInfo[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
